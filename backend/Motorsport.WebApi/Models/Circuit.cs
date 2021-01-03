namespace Motorsport.WebApi.Models
{
    public class Circuit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public int Laps { get; set; }
        public double CircuitLength { get; set; }
        public string LapRecordTime { get; set; }
        public double RaceDistance { get; set; }
        public string CircuitImageUrl { get; set; }
        public Nation Nation { get; set; }
    }
}