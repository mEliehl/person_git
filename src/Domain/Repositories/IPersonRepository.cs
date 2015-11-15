using Domain.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IPersonRepository : IBaseRepository<Person>
    {
        Task<List<Person>> Get(CancellationToken cancellationToken = default(CancellationToken));
        Person GetById(int id);
        Task<Person> GetByIdAsync(int id);
        Task<int> Add(Person person, CancellationToken cancellationToken = default(CancellationToken));
        Task<int> Update(Person person, CancellationToken cancellationToken = default(CancellationToken));
        Task<int> Remove(Person person);
        Task<int> Remove(int id);
    }
}
