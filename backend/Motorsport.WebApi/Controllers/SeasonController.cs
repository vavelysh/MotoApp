using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Motorsport.WebApi.Data;

namespace Motorsport.WebApi.Controllers
{
    [ApiController]
    [Route("/api/season")]
    public class SeasonController : ControllerBase
    {
        private readonly IApplication _repository;

        public SeasonController(IApplication repository)
        {
            _repository = repository;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var results = await _repository.AllGPsOfSeason(id);
            if (results.Any())
            {
                return Ok(results);
            }
            return NotFound();
        }
    }
}