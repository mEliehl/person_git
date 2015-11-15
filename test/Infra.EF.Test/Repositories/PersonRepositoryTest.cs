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
        [InlineData("Marcos", "meliehl@outlook.com","Marcolino")]
        [InlineData("Mariana", "mguin@outlook.com","Mari")]
        public async Task ShouldAddPersonThenUpdateAndCheckIfIdValid(string name, string email,string newName)
        {
            Person actual = await AddPerson(name, email);

            actual.ChangeName(newName);
            await personRepository.Update(actual);
            Assert.True(actual.Id > 0);
            Assert.Equal(newName, actual.Name);
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

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetByIdReturnEqual(string name, string email)
        {
            var actual = await AddPerson(name, email);

            var expected = personRepository.GetById(actual.Id);
            Assert.Equal(expected.ToString(), actual.ToString());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetByIdAsyncReturnEqual(string name, string email)
        {
            var actual = await AddPerson(name, email);

            var expected = await personRepository.GetByIdAsync(actual.Id);
            Assert.Equal(expected.ToString(), actual.ToString());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenRemoveById(string name, string email)
        {
            var actual = await AddPerson(name, email);

            await personRepository.Remove(actual.Id);
            var expected = personRepository.GetById(actual.Id);
            Assert.Equal(expected,null);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenRemoveByEntity(string name, string email)
        {
            var actual = await AddPerson(name, email);

            await personRepository.Remove(actual);
            var expected = personRepository.GetById(actual.Id);
            Assert.Equal(expected, null);
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

