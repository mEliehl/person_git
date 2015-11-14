using Domain.Entities;

namespace Domain.Repositories
{
    public interface IBaseRepository<Tentity> where Tentity : Entity
    {
    }
}
