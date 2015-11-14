using Domain.Entities;
using Domain.Repositories;
using Microsoft.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Infra.EF.Contexts;

namespace Infra.EF.Repositories
{
    public class PersonRepository : IPersonRepository
    {
        readonly DbContext context;

        public PersonRepository(DbContext context)
        {
            this.context = context;
        }

        public Task<int> Add(Person person, CancellationToken cancellationToken = default(CancellationToken))
        {
            context.Add(person);
            return context.SaveChangesAsync(cancellationToken);
        }

        public Task<List<Person>> Get(CancellationToken cancellationToken = default(CancellationToken))
        {
            return context.Set<Person>().ToListAsync(cancellationToken);
        }
    }
}
