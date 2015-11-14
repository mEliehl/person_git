using Domain.Entities;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Net;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class PersonController
    {
        private IList<Person> persons;

        public PersonController()
        {
            persons = new List<Person>();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return persons;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post(string name,string email)
        {
            persons.Add(new Person(name, email));
            
            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }
    }
}
