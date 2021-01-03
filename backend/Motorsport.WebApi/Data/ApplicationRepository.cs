using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Motorsport.WebApi.EfCore.Context;
using Motorsport.WebApi.Models;

namespace Motorsport.WebApi.Data
{
    public class ApplicationRepository : IApplication
    {
        private readonly MotorsportContext _repository;
        public ApplicationRepository(MotorsportContext repo)
        {
            _repository = repo;
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            var listOfCategories = await _repository.Categories
                .Include(prop => prop.Seasons.OrderByDescending(date => date.End))
                .ToListAsync();
            return listOfCategories;
        }

        public async Task<IEnumerable<GrandPrix>> GetAllGpAsync()
        {
            var listOfCategories = await _repository.GrandPrixes
                .Include(prop => prop.Circuit)
                .ThenInclude(prop => prop.Nation)
                .ToListAsync();
            return listOfCategories;
        }

        public async Task<ICollection<SeasonCraft>> GetStandingsOfSeason(int id)
        {
            var ls = await _repository.SeasonCrafts
                .Where(prop => prop.SeasonId == id)
                .Include(prop => prop.Driver)
                .ThenInclude(prop => prop.Nation)
                .Include(prop => prop.Team)
                .OrderByDescending(prop => prop.Points)
                .ToListAsync();
            return ls;
        }

        public async Task<ICollection<Event>> EventsOfGrandPrixAsync(int id)
        {
            var result = await _repository.GrandPrixes
                .Include(prop => prop.Events)
                .Where(prop => prop.Id == id)
                .Select(props => props.Events)
                .FirstOrDefaultAsync();
            return result;
        }

        public async Task<ICollection<GrandPrix>> AllGPsOfSeason(int id)
        {
            var result = await _repository.Seasons
                .Where(prop => prop.Id == id)
                .Include(prop => prop.Races)
                .ThenInclude(prop => prop.Circuit)
                .ThenInclude(prop => prop.Nation)
                .Select(prop => prop.Races)
                .SingleOrDefaultAsync();
            var res2 = result.OrderBy(prop => prop.EndRaceDay.Date).ToList();
            return res2;
        }

        public async Task<Category> SeasonsOfCategoryAsync(int id)
        {
            var res = await _repository.Categories
                .Include(prop => prop.Seasons)
                .Where(prop => prop.Id == id)
                .SingleOrDefaultAsync();
            return res;
        }

        public async Task<IList> EventResultsAsync(int id)
        {
            Random rnd = new Random();
            var seasonCrafts = await _repository.SeasonCrafts
                .Where(p => p.SeasonId == id)
                .Include(prop => prop.Driver)
                .ThenInclude(driver => driver.Nation)
                .Include(prop => prop.Team)
                .Select(prop => new
                {
                    Driver = prop.Driver,
                    Team = prop.Team,
                    Grid = rnd.Next(1,21),
                    Pits = rnd.Next(1,4),
                    Laps = 65,
                    Time = DateTime
                        .Parse($"{rnd.Next(1,1):00}:{rnd.Next(0,59):00}:{rnd.Next(0,60):00}.{rnd.Next(1,1000):000}")
                        .ToString("h:mm:ss.fff"),
                    StatusRace = rnd.Next(54,62) >= 55 ? true : false,
                })
                .ToListAsync();
            
            var orderProperly = seasonCrafts
                .OrderBy(prop => !prop.StatusRace)
                .ThenBy(prop => prop.Time)
                .ToList();
            return orderProperly;
        }
    }
}
