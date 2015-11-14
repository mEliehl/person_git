using Domain.Entities;
using Domain.Repositories;
using Infra.EF.Contexts;
using Infra.EF.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using System.Linq;

namespace Infra.EF.Test.Repositories
{
    public class PersonRepositoryTest
    {
        readonly IPersonRepository personRepository;
        public PersonRepositoryTest()
        {
            personRepository = new PersonRepository(new BaseContext());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndCheckIfIdValid(string name,string email)
        {
            Person actual = await AddPerson(name, email);
            Assert.True(actual.Id > 0);
            Assert.Equal(name, actual.Name);
            Assert.Equal(email, actual.Email);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetReturnPersonAdded(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personRepository.Get();
            Assert.IsAssignableFrom(typeof(IEnumerable<Person>), actual);
            Assert.True(actual.Any(a => a.Name == name));
            Assert.True(actual.Any(a => a.Email == email));
        }

        #region Helper Methods
        private async Task<Person> AddPerson(string name, string email)
        {
            var actual = new Person(name, email);
            await personRepository.Add(actual);
            return actual;
        }
        #endregion
    }
}

