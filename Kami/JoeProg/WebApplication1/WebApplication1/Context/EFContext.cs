using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Context
{
    public class EFContext : DbContext
    {
        public string Heroes { get; set; }
        public string Items { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=.//DB//heroes.db");
        }
    }
}
