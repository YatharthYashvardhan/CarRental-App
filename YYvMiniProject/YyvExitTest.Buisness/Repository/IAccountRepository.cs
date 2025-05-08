using Microsoft.AspNetCore.Identity;
using YYvMiniProject.Buisness.Models;

namespace YYvMiniProject.Buisness.Repository
{
    public interface IAccountRepository
    {
        Task<IdentityResult> CreateUserAsync(SignUpModel userModel);
        Task<string> PasswordSignInAsync(SignInModel signInModel);
        Task SignOutAsync();
    }
}