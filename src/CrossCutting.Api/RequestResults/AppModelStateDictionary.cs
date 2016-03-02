using CrossCutting.Exceptions;
using Microsoft.AspNet.Mvc.ModelBinding;
using System;

namespace CrossCutting.Api.RequestResults
{
    public class AppModelStateDictionary : ModelStateDictionary
    {
        public AppModelStateDictionary(Exception ex)
        {
            AddModelError(ex);
        }

        public void AddModelError(Exception ex)
        {
            if (ex is AppException)
            {
                var appEx = ex as AppException;
                foreach (var error in appEx.Errors)
                {
                    this.AddModelError(error.Key, error.Value);
                }
            }else
            {
                this.AddModelError(ex);
            }
        }
    }
}
