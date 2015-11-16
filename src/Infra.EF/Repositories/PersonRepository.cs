using Domain.Entities;
using Domain.Repositories;
using Microsoft.Data.Entity;
using System.Linq;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using System;

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

        public Task<int> Update(Person person, CancellationToken cancellationToken = default(CancellationToken))
        {
            context.Set<Person>().Attach(person);
            context.Entry(person).State = EntityState.Modified;
            return context.SaveChangesAsync(cancellationToken);
        }

        public Task<int> Remove(Guid id)
        {
            var person = GetById(id);
            return Remove(person);
        }

        public Task<int> Remove(Person person)
        {
            context.Remove(person);
            return context.SaveChangesAsync();
        }

        public Task<List<Person>> Get(CancellationToken cancellationToken = default(CancellationToken))
        {
            return context.Set<Person>().ToListAsync(cancellationToken);
        }

        public Person GetById(Guid id)
        {
            return context.Set<Person>().FirstOrDefault(f => f.Id == id);
        }

        public Task<Person> GetByIdAsync(Guid id)
        {
            return context.Set<Person>().FirstOrDefaultAsync(f => f.Id == id);
        }
    }
}
