﻿using Domain.Entities;
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
            Assert.Equal(0, person.Id);
        }
    }
}
