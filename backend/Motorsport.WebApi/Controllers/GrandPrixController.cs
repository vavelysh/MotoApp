using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Motorsport.WebApi.Data;

namespace Motorsport.WebApi.Controllers
{
    [ApiController]
    [Route("/api/gp")]
    public class GrandPrixController : ControllerBase
    {
        private readonly IApplication _repository;

        public GrandPrixController(IApplication repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var results = await _repository.GetAllGpAsync();
            if (results.Any())
            {
                return Ok(results); 
            }
            return NotFound();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var results = await _repository.EventsOfGrandPrixAsync(id);
            if (results.Any())
            {
                return Ok(results);
            }
            return NotFound();
        }
    }
}