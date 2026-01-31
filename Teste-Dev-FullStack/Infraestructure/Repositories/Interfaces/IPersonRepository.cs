using Teste_Dev_FullStack.Domain.Entities;

namespace Teste_Dev_FullStack.Infraestructure.Repositories.Interfaces
{
    public interface IPersonRepository: IGenericRepository<Person>
    {
        Task<bool> HasTransacoesAsync(Guid personId);
    }
}
