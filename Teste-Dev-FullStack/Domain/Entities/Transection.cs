using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Teste_Dev_FullStack.Domain.Enums;

namespace Teste_Dev_FullStack.Domain.Entities
{
    public class Transection
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public ETransectionType TransectionType { get; set; }
        [Required]
        public Guid PersonId { get; set; }
        [Required]
        public Guid CategoryId { get; set; }
    }
}
