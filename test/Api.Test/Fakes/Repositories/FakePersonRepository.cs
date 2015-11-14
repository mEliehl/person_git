using Domain.Entities;
using Domain.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Api.Test.Fakes.Repositories
{
    public class FakePersonRepository : IPersonRepository
    {
        private IList<Person> persons;

        public FakePersonRepository()
        {
            persons = new List<Person>();
        }

        public Task<int> Add(Person person, CancellationToken cancellationToken = default(CancellationToken))
        {
           return Task<int>.Factory.StartNew( () =>
           {
               persons.Add(person);
               return 0;
           });
        }

        public Task<List<Person>> Get(CancellationToken cancellationToken = default(CancellationToken))
        {
            return Task<List<Person>>.Factory.StartNew(() =>
            {
                return persons.ToList();
            });
        }
    }
}
