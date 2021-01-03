using System.Collections.Generic;

namespace Motorsport.WebApi.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public ICollection<Season> Seasons { get; set; }
    }
}