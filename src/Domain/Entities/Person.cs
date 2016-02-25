namespace Domain.Entities
{
    public class Person : Entity
    {
        private PersonState personState()
        {
            return PersonStateFactory.CreatePersonState(State);
        }

        internal Person()
        {            
        }

        public Person(string Name,
            string Email)
        {
            this.Name = Name;
            this.Email = Email;

            State = PersonStateEnun.New;
        }

        public string Name { get; private set; }
        public string Email { get; private set; }
        public PersonStateEnun State { get; private set; }

        public void ChangeName(string newName)
        {
            Name = newName;
        }

        public void Delete()
        {
            personState().CanDelete();
        }

        public void Block()
        {
            personState().CanBlock();
            State = PersonStateEnun.Blocked;            
        }

        public void Approve()
        {
            personState().CanApprove();
            State = PersonStateEnun.Approved;
        }
    }
}
