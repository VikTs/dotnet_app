using System.ComponentModel.DataAnnotations;

namespace skillup_sharp.Models
{
    public class TodoItem
    {
        [Key]
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}