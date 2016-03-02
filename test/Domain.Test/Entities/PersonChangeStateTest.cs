using CrossCutting.Exceptions;
using Domain.Entities;
using Xunit;

namespace Domain.Test.Entities
{
    public class PersonChangeStateTest
    {
        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonAndDelete(string name, string email)
        {
            var person = new Person(name, email);
            person.Delete();
            Assert.Equal(PersonStateEnun.New, person.State);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonAndApprove(string name, string email)
        {
            var person = new Person(name, email);
            person.Approve();
            Assert.Equal(PersonStateEnun.Approved, person.State);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonAndBlock(string name, string email)
        {
            var person = new Person(name, email);
            person.Block();
            Assert.Equal(PersonStateEnun.Blocked, person.State);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenApproveAndDelete(string name, string email)
        {
            var person = new Person(name, email);
            person.Approve();

            Assert.Throws<AppException>(() => person.Delete());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenApproveAndApprove(string name, string email)
        {
            var person = new Person(name, email);
            person.Approve();

            Assert.Throws<AppException>(() => person.Approve());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenApproveAndBlock(string name, string email)
        {
            var person = new Person(name, email);
            person.Approve();
            person.Block();
            Assert.Equal(PersonStateEnun.Blocked, person.State);
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenBlockAndDelete(string name, string email)
        {
            var person = new Person(name, email);
            person.Block();

            Assert.Throws<AppException>(() => person.Delete());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenBlockAndBlock(string name, string email)
        {
            var person = new Person(name, email);
            person.Block();

            Assert.Throws<AppException>(() => person.Block());
        }

        [Theory]
        [InlineData("Marcos", "meliehl@outlook.com")]
        [InlineData("Mariana", "mguin@outlook.com")]
        public void ShouldCreatePersonThenBlockAndApprove(string name, string email)
        {
            var person = new Person(name, email);
            person.Block();
            person.Approve();
            Assert.Equal(PersonStateEnun.Approved, person.State);
        }
    }
}
