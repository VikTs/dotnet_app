using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using skillup_sharp.Models;

namespace skillup_sharp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TodoController : Controller
    {
        private readonly ApplicationContext _context;
        public TodoController(ApplicationContext context)
        {
            _context = context;
            if (_context.TodoItems.Count() == 0)
            {
                _context.TodoItems.Add(new TodoItem { Name = "1" }); 
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<TodoItem>> GetAll()
        {
            return _context.TodoItems.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<TodoItem> GetById(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            
            var item = _context.TodoItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]      
        public async Task<IActionResult> Create(TodoItem todo)
        {
            _context.TodoItems.Add(todo);
            _context.SaveChanges();
            return View(todo);
        }
    }
}