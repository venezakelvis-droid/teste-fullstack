using System.ComponentModel.DataAnnotations;

namespace Teste_Dev_FullStack.Domain.Entities
{
    public class Person
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public Transection Transection { get; set; }
    }
}
