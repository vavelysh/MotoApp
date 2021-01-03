using System;

namespace Motorsport.WebApi.Models
{
    public class EventResult
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public int SeasonCraftId { get; set; }
        public int? Pos { get; set; }
        public int? Laps { get; set; }
        public int? Grid { get; set; }
        public int? Pits { get; set; }
        public int? Pts { get; set; }
        public DateTime? TimeOne { get; set; }
        public DateTime? TimeTwo { get; set; }
        
        public SeasonCraft SeasonCraft { get; set; }
    }
}