using System;

namespace Api.ViewModels.Person
{
    public class AddUpdatePersonViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
