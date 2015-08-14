using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AureliaDemo1.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AureliaDemo1.Controllers
{
    [Route("api/[controller]")]
    public class NameController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<NameModel> Get()
        {
            return new NameModel[] {
                new NameModel {
                    FirstName = "Ashley",
                    LastName = "Grant"
                }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public NameModel Get(int id)
        {
            return new NameModel
            {
                FirstName = "Ashley",
                LastName = "Grant"
            };
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
