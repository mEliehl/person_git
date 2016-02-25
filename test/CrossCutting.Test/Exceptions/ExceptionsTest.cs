using CrossCutting.Exceptions;
using Xunit;

namespace CrossCutting.Test.Exceptions
{
    public class ExceptionsTest
    {
        [Fact]
        public void ShouldCreateAppExceptionAndAddAnError()
        {
            var ex = new AppException();
            ex.AddError("Test", "Test a Fact");
            Assert.Equal(1, ex.Errors.Count);
        }

        [Fact]
        public void ShouldCreateAppExceptionWithAnError()
        {
            var ex = new AppException("Test", "Test a Fact");
            Assert.Equal(1, ex.Errors.Count);
        }
    }
}
