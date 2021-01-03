using Microsoft.EntityFrameworkCore;
using Motorsport.WebApi.Models;

namespace Motorsport.WebApi.EfCore.Context
{
    public class MotorsportContext : DbContext
    {
        public MotorsportContext(DbContextOptions<MotorsportContext> options) : base(options)
        {
            
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<GrandPrix> GrandPrixes { get; set; }
        public DbSet<Circuit> Circuits { get; set; }
        public DbSet<Nation> Nations { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<SeasonCraft> SeasonCrafts { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<EventResult> EventResults { get; set; }
    }
}