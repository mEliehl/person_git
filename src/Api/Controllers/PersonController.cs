using Api.ViewModels.Person;
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

        // GET: api/{id}
        [HttpGet("{id:int}")]
        public async Task<Person> Get(int id)
        {
            return await personRepository.GetByIdAsync(id);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]AddUpdatePersonViewModel viewModel)
        {
            await personRepository.Add(new Person(viewModel.Name, viewModel.Email));
            
            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        // Put api/values
        [HttpPut]
        public async Task<IActionResult> Put([FromBody]AddUpdatePersonViewModel viewModel)
        {
            var person = await personRepository.GetByIdAsync(viewModel.Id);
            person.ChangeName(viewModel.Name);
            await personRepository.Update(person);

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        // Delete api/{id}
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await personRepository.Remove(id);

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }
    }
}
