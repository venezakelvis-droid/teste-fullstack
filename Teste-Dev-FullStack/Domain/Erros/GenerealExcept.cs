using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Teste_Dev_FullStack.Domain.Erros
{
    public class GenerealExcept: Exception
    {
        public string Code { get; }
        public string Message { get; }

        private GenerealExcept(string code, string message)
        {
            Code = code;
            Message = message;
        }

        public static GenerealExcept None => new("", "");

        public static GenerealExcept Validation(string message) =>
            new("VALIDATION_ERROR", message);

        public static GenerealExcept NotFound(string message) =>
            new("NOT_FOUND", message);

        public static GenerealExcept Conflict(string message) =>
            new("CONFLICT", message);

        public static GenerealExcept Unexpected(string message) =>
            new("UNEXPECTED_ERROR", message);
    }
}
