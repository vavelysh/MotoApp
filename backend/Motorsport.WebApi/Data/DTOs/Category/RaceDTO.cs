using System;

namespace Motorsport.WebApi.Data.DTOs
{
    public class RaceDTO
    {
        public int Id { get; set; }
        public DateTime StartRaceDay { get; set; }
        public DateTime EndRaceDay { get; set; }
        public string Name { get; set; }
    }
}