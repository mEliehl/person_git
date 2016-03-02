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

        #region Get list
        [Fact]
        public async Task ShouldReturnListPerson()
        {
            var result = await personController.Get();
            
            Assert.IsType<HttpOkObjectResult>(result);

            var person = result as HttpOkObjectResult;
            Assert.IsAssignableFrom<IList<Person>>(person.Value);
        }
        #endregion

        #region Get by Id
        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetByIdReturnEqual(string name, string email)
        {
            await AddPerson(name, email);

            var result = await personController.Get(Guid.Empty) as HttpOkObjectResult;
            var actual = result.Value as Person;
            Assert.Equal(name, actual.Name);
            Assert.Equal(email, actual.Email);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndGetByIdReturnNotFound(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personController.Get(Guid.NewGuid());
            Assert.IsType<HttpNotFoundResult>(actual);
        }
        #endregion

        #region Post
        [Theory]
        [InlineData("Marcos","meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonAndReturnOkAndCheckIfInserted(string name,string email)
        {
            var actual = await AddPerson(name, email) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK,actual.StatusCode);

            var result = await personController.Get() as HttpOkObjectResult;
            var expected = result.Value as IList<Person>;
            Assert.True(expected.Any(a => a.Name == name));
            Assert.True(expected.Any(a => a.Email == email));
        }

        #endregion

        #region Put
        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com","Marcolino")]
        [InlineData("Mariana", "mguin@outlook.com","Mari")]
        public async Task ShouldAddPersonAndUpdateReturnOkAndCheckIfUpdated(string name, string email, string newName)
        {
            await AddPerson(name, email);
            
            var person = new AddUpdatePersonViewModel()
            {
                name = newName,
                Email = email
            };

            var actual = await personController.Put(person) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK, actual.StatusCode);

            var result = await personController.Get() as HttpOkObjectResult;
            var expected = result.Value as IList<Person>;
            Assert.True(expected.Any(a => a.Name == newName));
            Assert.True(expected.Any(a => a.Email == email));
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com", "Marcolino")]
        [InlineData("Mariana", "mguin@outlook.com", "Mari")]
        public async Task ShouldPutPersonAndCheckIfNotFound(string name, string email, string newName)
        {
            var person = new AddUpdatePersonViewModel()
            {
                name = newName,
                Email = email
            };

            var actual = await personController.Put(person) as HttpStatusCodeResult;
            Assert.IsType<HttpNotFoundResult>(actual);
        }
        #endregion

        #region Delete
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
        public async Task ShouldRemoveByIdAndReturnNotFound(string name, string email)
        {
            var actual = await personController.Delete(Guid.NewGuid());
            Assert.IsType<HttpNotFoundResult>(actual);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenApproveThenRemoveByIdAndReturnBadRequest(string name, string email)
        {
            await AddPerson(name, email);
            await personController.Approve(Guid.Empty);
            var actual = await personController.Delete(Guid.Empty) as ObjectResult;
            Assert.Equal((int)HttpStatusCode.BadRequest, actual.StatusCode);
        }
        #endregion

        #region Block
        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenBlockByIdAndReturnOK(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personController.Block(Guid.Empty) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK, actual.StatusCode);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldBlockByIdAndReturnNotFound(string name, string email)
        {
            var actual = await personController.Block(Guid.NewGuid());
            Assert.IsType<HttpNotFoundResult>(actual);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenBlockThenBlockByIdAndReturnBadRequest(string name, string email)
        {
            await AddPerson(name, email);
            await personController.Block(Guid.Empty);
            var actual = await personController.Block(Guid.Empty) as ObjectResult;
            Assert.Equal((int)HttpStatusCode.BadRequest, actual.StatusCode);
        }
        #endregion

        #region Approve
        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenApproveByIdAndReturnOK(string name, string email)
        {
            await AddPerson(name, email);

            var actual = await personController.Approve(Guid.Empty) as HttpStatusCodeResult;
            Assert.Equal((int)HttpStatusCode.OK, actual.StatusCode);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldApproveByIdAndReturnNotFound(string name, string email)
        {
            var actual = await personController.Approve(Guid.NewGuid());
            Assert.IsType<HttpNotFoundResult>(actual);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public async Task ShouldAddPersonThenApproveThenApproveByIdAndReturnBadRequest(string name, string email)
        {
            await AddPerson(name, email);
            await personController.Approve(Guid.Empty);
            var actual = await personController.Approve(Guid.Empty) as ObjectResult;
            Assert.Equal((int)HttpStatusCode.BadRequest, actual.StatusCode);
        }
        #endregion

        #region Helper Methods
        private async Task<IActionResult> AddPerson(string name, string email)
        {
            var person = new AddUpdatePersonViewModel()
            {
                name = name,
                Email = email
            };
            return await personController.Post(person) ;
        }
        #endregion

    }
}
