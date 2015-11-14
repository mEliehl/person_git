using Api.Controllers;
using Api.Test.Fakes.Repositories;
using Domain.Entities;
using Microsoft.AspNet.Mvc;
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
        [InlineData(null,null)]
        [InlineData("","")]
        public async Task ShouldAddPersonAndReturnOkAndCheckIfInserted(string name,string email)
        {
            var actual = await personController.Post(name,email) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK,actual.StatusCode);

            var expected = await personController.Get();
            Assert.True(expected.Any(a => a.Name == name));
            Assert.True(expected.Any(a => a.Email == email));
        }
    }
}
