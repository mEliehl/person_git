using Api.Controllers;
using Api.Test.Fakes.Repositories;
using Api.ViewModels.Person;
using Domain.Entities;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Xunit;

namespace Api.Test.Controller
{
    public class PersonControllerTest
    {
        readonly PersonController personController;

        public PersonControllerTest()
        {
            personController = new PersonController(new FakePersonRepository());
        }

        [Fact]
        public async Task ShouldReturnListPerson()
        {
            var persons = await personController.Get();
            Assert.IsAssignableFrom(typeof(IEnumerable<Person>), persons);
        }

        [Theory]
        [InlineData("Marcos","meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndReturnOkAndCheckIfInserted(string name,string email)
        {
            var actual = await AddPerson(name, email) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK,actual.StatusCode);

            var expected = await personController.Get();
            Assert.True(expected.Any(a => a.Name == name));
            Assert.True(expected.Any(a => a.Email == email));
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com","Marcolino")]
        [InlineData("Mariana", "mguin@outlook.com","Mari")]
        public async Task ShouldAddPersonAndUpdateReturnOkAndCheckIfUpdated(string name, string email, string newName)
        {
            await AddPerson(name, email);
            
            var person = new AddUpdatePersonViewModel()
            {
                Name = newName,
                Email = email
            };

            var actual = await personController.Put(person) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK, actual.StatusCode);

            var expected = await personController.Get();
            Assert.True(expected.Any(a => a.Name == newName));
            Assert.True(expected.Any(a => a.Email == email));
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenRemoveByIdAndReturnOK(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personController.Delete(Guid.Empty) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK, actual.StatusCode);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetByIdReturnEqual(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personController.Get(Guid.Empty);
            Assert.Equal(name, actual.Name);
            Assert.Equal(email, actual.Email);
        }

        #region Helper Methods
        private async Task<IActionResult> AddPerson(string name, string email)
        {
            var person = new AddUpdatePersonViewModel()
            {
                Name = name,
                Email = email
            };
            return await personController.Post(person) ;
        }
        #endregion

    }
}
