using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Motorsport.WebApi.Models;

namespace Motorsport.WebApi.Data
{
    public interface IApplication
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<IEnumerable<GrandPrix>> GetAllGpAsync();
        Task<ICollection<SeasonCraft>> GetStandingsOfSeason(int id);
        Task<ICollection<Event>> EventsOfGrandPrixAsync(int id);
        Task<ICollection<GrandPrix>> AllGPsOfSeason(int id);
        Task<Category> SeasonsOfCategoryAsync(int id);
        Task<IList> EventResultsAsync(int id);
    }
}