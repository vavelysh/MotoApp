using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Motorsport.WebApi.Data;

namespace Motorsport.WebApi.Controllers
{
    [ApiController]
    [Route("/api/results")]
    public class EventResultController : ControllerBase
    {
        private readonly IApplication _categoryRepository;

        public EventResultController(IApplication categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var results = await _categoryRepository.EventResultsAsync(id);
            if (results != null)
            {
                return Ok(results);
            }
            return NotFound();
        }
    }
}