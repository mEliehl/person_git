using System;
using System.Collections.Generic;

namespace CrossCutting.Exceptions
{
    public class AppException : Exception
    {
        public AppException()
            :base("Error in the Application")
        {
            Errors = new Dictionary<string, string>();
        }

        public AppException(string key, string message)
            :this()
        {
            AddError(key, message);
        }

        public IDictionary<string, string> Errors { get; private set; }

        public void AddError(string key, string message)
        {
            Errors.Add(key, message);
        }
    }
}
