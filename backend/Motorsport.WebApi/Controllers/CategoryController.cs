using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Motorsport.WebApi.Data;

namespace Motorsport.WebApi.Controllers
{
    [ApiController]
    [Route("/api/category")]
    public class CategoryController : ControllerBase
    {
        private readonly IApplication _categoryRepository;

        public CategoryController(IApplication categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var results = await _categoryRepository.GetAllCategoriesAsync();
            if (results.Any())
            {
                return Ok(results); 
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var results = await _categoryRepository.SeasonsOfCategoryAsync(id);
            if (results != null)
            {
                return Ok(results);
            }
            return NotFound();
        }
    }
}