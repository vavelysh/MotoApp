using System;

namespace Motorsport.WebApi.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string EventType { get; set; }
        public DateTime EventDay { get; set; }
    }
}