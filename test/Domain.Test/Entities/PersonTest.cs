using Domain.Entities;
using System;
using Xunit;

namespace Domain.Test.Entities
{
    public class PersonTest
    {
        [Theory]
        [InlineData("Marcos","meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePerson(string name,string email)
        {
            var person = new Person(name,email);

            Assert.Equal(name, person.Name);
            Assert.Equal(email, person.Email);
            Assert.NotEqual(Guid.Empty, person.Id);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com","Marcolino")]
        [InlineData("Mariana", "mguin@outlook.com","Mari")]
        public void ShouldCreatePersonAndChangeName(string name, string email, string newName)
        {
            var person = new Person(name, email);
            person.ChangeName(newName);
            Assert.Equal(newName, person.Name);
        }
    }
}
