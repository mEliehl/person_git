using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class PersonController
    {
        private IPersonRepository personRepository;

        public PersonController(IPersonRepository personRepository)
        {
            this.personRepository = personRepository;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IEnumerable<Person>> Get()
        {
            return await personRepository.Get();
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(string name,string email)
        {
            await personRepository.Add(new Person(name, email));
            
            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }
    }
}
