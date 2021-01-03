namespace Motorsport.WebApi.Models
{
    public class SeasonCraft
    {
        public int Id { get; set; }
        public int DriverId { get; set; }
        public int TeamId { get; set; }
        public int SeasonId { get; set; }
        public int Wins { get; set; }
        public int? PolePositions { get; set; }
        public int? Podiums { get; set; }
        public int Points { get; set; }

        public Season Season { get; set; }
        public Team Team { get; set; }
        public Driver Driver { get; set; }
    }
}