using Api.ViewModels.Person;
using CrossCutting.Api.RequestResults;
using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNet.Mvc;
using System;
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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return new HttpOkObjectResult(await personRepository.Get());
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var person = await personRepository.GetByIdAsync(id);
            if (person == null)
                return new HttpNotFoundResult();

            return new HttpOkObjectResult(person);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]AddUpdatePersonViewModel viewModel)
        {
            await personRepository.Add(new Person(viewModel.name, viewModel.Email));
            
            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody]AddUpdatePersonViewModel viewModel)
        {
            var person = await personRepository.GetByIdAsync(viewModel.Id);

            if (person == null)
                return new HttpNotFoundResult();

            person.ChangeName(viewModel.name);
            await personRepository.Update(person);

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var person = await personRepository.GetByIdAsync(id);

                if (person == null)
                    return new HttpNotFoundResult();

                person.Delete();
                await personRepository.Remove(id);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(new AppModelStateDictionary(ex));
            }

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        [HttpPut("[action]/{id:Guid}")]
        public async Task<IActionResult> Block(Guid id)
        {
            try
            {
                var person = await personRepository.GetByIdAsync(id);

                if (person == null)
                    return new HttpNotFoundResult();

                person.Block();
                await personRepository.Update(person);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(new AppModelStateDictionary(ex));
            }

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }

        [HttpPut("[action]/{id:Guid}")]
        public async Task<IActionResult> Approve(Guid id)
        {
            try
            {
                var person = await personRepository.GetByIdAsync(id);

                if (person == null)
                    return new HttpNotFoundResult();

                person.Approve();
                await personRepository.Update(person);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(new AppModelStateDictionary(ex));
            }

            return new HttpStatusCodeResult((int)HttpStatusCode.OK);
        }
    }
}
