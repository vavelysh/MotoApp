using System;
using System.Collections.Generic;

namespace Motorsport.WebApi.Models
{
    public class GrandPrix
    {
        public int Id { get; set; }
        public DateTime StartRaceDay { get; set; }
        public DateTime EndRaceDay { get; set; }
        public string Name { get; set; }
        public bool ClosedState { get; set; }
        public Circuit Circuit { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}