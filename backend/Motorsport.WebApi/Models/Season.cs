using System;
using System.Collections.Generic;

namespace Motorsport.WebApi.Models
{
    public class Season
    {
        public int Id { get; set; }
        public DateTime Begin { get; set; }
        public DateTime End { get; set; }
        public ICollection<GrandPrix> Races { get; set; }
    }
}