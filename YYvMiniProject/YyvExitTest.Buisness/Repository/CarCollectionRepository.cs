using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Text;
using System.Threading.Tasks;
using YYvMiniProject.Buisness.DbContext_;
using YYvMiniProject.Buisness.Models;

namespace YYvMiniProject.Buisness.Repository
{
    public class CarCollectionRepository : ICarCollectionRepository
    {
        private readonly AppDbContext _context;

        public CarCollectionRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CarCollectionModel>> GetAllCarCollections()
        {
            return await _context.carCollections.ToListAsync();
        }

        public async Task<CarCollectionModel> GetCarCollectionById(Guid id)
        {
            return await _context.carCollections.FindAsync(id);
        }

        public async Task<Guid> AddCarCollection(CarCollectionModel carCollection)
        {
            await _context.carCollections.AddAsync(carCollection);
            await _context.SaveChangesAsync();
            return carCollection.Vehicle_Id;
        }

        public async Task<CarCollectionModel> UpdateCarCollection(CarCollectionModel carCollection)
        {
            var dborder = await _context.carCollections.FindAsync(carCollection.Vehicle_Id);

            dborder.Maker = carCollection.Maker;
            dborder.Model = carCollection.Model;
            dborder.RentalPrice = carCollection.RentalPrice;
            dborder.LastMaintenanceDate = carCollection.LastMaintenanceDate;
            dborder.Year = carCollection.Year;
            dborder.Mileage = carCollection.Mileage;
            dborder.Color = carCollection.Color;
            dborder.FuelType = carCollection.FuelType;
            dborder.TransmissionType = carCollection.TransmissionType;
            await _context.SaveChangesAsync();
            return dborder;
        }

        public async Task<int> DeleteCarCollection(Guid id)
        {
            var carCollection = await _context.carCollections.FindAsync(id);
            if (carCollection != null)
            {
                _context.carCollections.Remove(carCollection);
                await _context.SaveChangesAsync();
            }
            return StatusCodes.Status200OK;
        }
    }
}
