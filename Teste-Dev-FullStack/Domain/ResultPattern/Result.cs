using Teste_Dev_FullStack.Domain.Erros;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Teste_Dev_FullStack.Domain.ResultPattern
{
    public sealed class Result : ResultBase
    {
        private Result(bool isSuccess, GenerealExcept error)
            : base(isSuccess, error) { }

        public static Result Success()
            => new(true, GenerealExcept.None);

        public static Result Failure(GenerealExcept error)
            => new(false, error);
    }

}
