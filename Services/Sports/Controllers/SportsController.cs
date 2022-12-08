using Microsoft.AspNetCore.Mvc;
using skillup_sharp.Models;

namespace skillup_sharp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SportsController : Controller
    {

        private readonly ApplicationContext _context;
        public SportsController(ApplicationContext context)
        {
            _context = context;
            if (_context.Sports.Count() == 0)
            {
                _context.Sports.Add(new Sport { Name = "Football", Description = "" }); 
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<Sport>> GetAll()
        {
            return _context.Sports.ToList();
        }
        
    }
}