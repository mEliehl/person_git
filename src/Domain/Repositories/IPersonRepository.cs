using Domain.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IPersonRepository : IBaseRepository<Person>
    {
        Task<List<Person>> Get(CancellationToken cancellationToken = default(CancellationToken));
        Task<int> Add(Person person, CancellationToken cancellationToken = default(CancellationToken));
    }
}
