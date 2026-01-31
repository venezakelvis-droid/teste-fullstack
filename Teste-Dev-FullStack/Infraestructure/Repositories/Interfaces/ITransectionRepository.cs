using Teste_Dev_FullStack.Domain.Entities;

namespace Teste_Dev_FullStack.Infraestructure.Repositories.Interfaces
{
    public interface ITransectionRepository:IGenericRepository<Transection>
    {
        Task<IEnumerable<Transection>> GetByPersonIdAsync(Guid personId);
        Task DeleteByPersonIdAsync(Guid personId);
    }
}
