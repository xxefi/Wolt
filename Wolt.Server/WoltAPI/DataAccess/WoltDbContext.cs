using Microsoft.EntityFrameworkCore;
using WoltAPI.Models;

namespace WoltAPI.DataAccess
{
    public class WoltDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public WoltDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Products> Products => Set<Products>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Default"));
        }
    }
}
