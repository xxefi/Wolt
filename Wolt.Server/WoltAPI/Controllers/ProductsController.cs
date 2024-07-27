using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WoltAPI.DataAccess;
using WoltAPI.Dtos;
using WoltAPI.Models;

namespace WoltAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly WoltDbContext _context;

        public ProductsController(WoltDbContext context) => _context = context;

        [HttpGet("GetWoltProducts")]
        public async Task<IActionResult> Get([FromQuery] string? query, CancellationToken ct)
        {
            IQueryable<Products> productsQuery = _context.Products;

            if (!string.IsNullOrEmpty(query))
                productsQuery = productsQuery.Where(p => p.Name.Contains(query) || p.Description.Contains(query));

            var products = await productsQuery.ToListAsync(ct);

            if (products == null)
                return NotFound("No data found");

            return Ok(products);
        }

        [HttpPost("PostProduct")]
        public async Task<IActionResult> Post([FromBody] ProductsDto productsDto)
        {
            if (productsDto == null)
                return BadRequest("Product data is null");

            var product = new Products
            {
                Id = Guid.NewGuid(),
                Name = productsDto.Name,
                Description = productsDto.Description,
                Price = productsDto.Price,
                ImageSrc = productsDto.ImageSrc,
            };
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return Ok("Product successful added");
        }
    }
}
