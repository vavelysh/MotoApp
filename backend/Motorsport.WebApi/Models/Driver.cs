using System;

namespace Motorsport.WebApi.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FaceImgUrl { get; set; }
        public int NationId { get; set; }

        public Nation Nation { get; set; }
    }
}