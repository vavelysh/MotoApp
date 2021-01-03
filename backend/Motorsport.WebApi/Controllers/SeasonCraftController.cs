using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Motorsport.WebApi.Data;

namespace Motorsport.WebApi.Controllers
{
    [ApiController]
    [Route("/api/standings")]
    public class SeasonCraftController : ControllerBase
    {
        private readonly IApplication _repository;
        public SeasonCraftController(IApplication repository)
        {
            _repository = repository;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var results = await _repository.GetStandingsOfSeason(id);
            if (results.Any())
            {
                return Ok(results);
            }
            return NotFound();
        }
    }
}