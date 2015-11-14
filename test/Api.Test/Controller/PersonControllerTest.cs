using Api.Controllers;
using Domain.Entities;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Xunit;

namespace Api.Test.Controller
{
    public class PersonControllerTest
    {
        readonly PersonController personController;

        public PersonControllerTest()
        {
            personController = new PersonController();
        }

        [Fact]
        public void ShouldReturnListPerson()
        {
            var persons = personController.Get();
            Assert.IsAssignableFrom(typeof(IEnumerable<Person>), persons);
        }

        [Theory]
        [InlineData("Marcos","meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        [InlineData(null,null)]
        [InlineData("","")]
        public void ShouldAddPersonAndReturnOkAndCheckIfInserted(string name,string email)
        {
            var actual = personController.Post(name,email) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK,actual.StatusCode);

            var expected = personController.Get();
            Assert.True(expected.Any(a => a.Name == name));
            Assert.True(expected.Any(a => a.Email == email));
        }
    }
}
