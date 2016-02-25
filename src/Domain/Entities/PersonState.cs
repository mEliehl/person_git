using CrossCutting.Exceptions;
using System;

namespace Domain.Entities
{
    interface PersonState
    {
        bool CanDelete();
        bool CanBlock();
        bool CanApprove();
        string StateDescription();
    }

    class NewPersonState : PersonState
    {
        public bool CanApprove()
        {
            return true;
        }

        public bool CanBlock()
        {
            return true;
        }

        public bool CanDelete()
        {
            return true;
        }

        public string StateDescription()
        {
            return "New";
        }
    }

    class BlockedPersonState : PersonState
    {
        public bool CanApprove()
        {
            return true;
        }

        public bool CanBlock()
        {
            throw new AppException("State", "Already blocked!");
        }

        public bool CanDelete()
        {
            throw new AppException("State", "Cannot delete person blocked");
        }

        public string StateDescription()
        {
            return "Approved";
        }
    }

    class ApprovedPersonState : PersonState
    {
        public bool CanApprove()
        {
            throw new AppException("State", "Already approved!");
        }

        public bool CanBlock()
        {
            return true;
        }

        public bool CanDelete()
        {
            throw new AppException("State", "Cannot delete person blocked");
        }

        public string StateDescription()
        {
            return "Approved";
        }
    }

    class NotImplementedPersonState : PersonState
    {
        public bool CanApprove()
        {
            throw new NotImplementedException();
        }

        public bool CanBlock()
        {
            throw new NotImplementedException();
        }

        public bool CanDelete()
        {
            throw new NotImplementedException();
        }

        public string StateDescription()
        {
            throw new NotImplementedException();
        }
    }

    static class PersonStateFactory
    {
        public static PersonState CreatePersonState(PersonStateEnun enun)
        {
            switch (enun)
            {
                case PersonStateEnun.New:
                    return new NewPersonState();
                case PersonStateEnun.Blocked:
                    return new BlockedPersonState();
                case PersonStateEnun.Approved:
                    return new ApprovedPersonState();
                default:
                    return new NotImplementedPersonState();
            }
        }
    }
}
