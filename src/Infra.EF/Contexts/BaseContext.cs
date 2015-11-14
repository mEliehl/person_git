using Domain.Entities;
using Infra.EF.Configs;
using Microsoft.Data.Entity;

namespace Infra.EF.Contexts
{
    public class BaseContext : DbContext
    {
        public new DbSet<TEntity> Set<TEntity>() where TEntity : Entity
        {
            return base.Set<TEntity>();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity(PersonConfig.Config());
        }
    }
}
