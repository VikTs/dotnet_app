using System.ComponentModel.DataAnnotations;

namespace skillup_sharp.Models
{
    public class Sport
    {
        [Key]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}