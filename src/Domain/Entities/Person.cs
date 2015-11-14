namespace Domain.Entities
{
    public class Person : Entity
    {
        internal Person()
        {

        }

        public Person(string Name,
            string Email)
        {
            this.Name = Name;
            this.Email = Email;
        }

        public string Name { get; private set; }
        public string Email { get; private set; }

    }
}
