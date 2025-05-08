using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YYvMiniProject.Buisness.Models;

namespace YYvMiniProject.Buisness.DbContext_
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<CarCollectionModel> carCollections { get; set; }
        public DbSet<CarRentalAgreementModel> carRentalAgreements { get; set; }
    }
}