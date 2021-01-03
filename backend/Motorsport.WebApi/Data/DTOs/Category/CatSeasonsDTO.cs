using System;
using System.Collections.Generic;

namespace Motorsport.WebApi.Data.DTOs
{
    public class CatSeasonsDTO
    {
        public int Id { get; set; }
        public DateTime Begin { get; set; }
        public DateTime End { get; set; }
        public ICollection<RaceDTO> Races { get; set; }
    }
}