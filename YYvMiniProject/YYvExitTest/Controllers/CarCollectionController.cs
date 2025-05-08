using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YYvMiniProject.Buisness.Models;
using YYvMiniProject.Buisness.Repository;

namespace YYvMiniProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarCollectionController : ControllerBase
    {
        private readonly ICarCollectionRepository _carCollectionRepository;
        public CarCollectionController(ICarCollectionRepository carCollectionRepository)
        {
            _carCollectionRepository = carCollectionRepository;
        }
        [HttpGet]
        [Route("getCars")]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await _carCollectionRepository.GetAllCarCollections();
            
            return Ok(cars);
        }
        [HttpPost]
        [Route("addCars")]
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
        public async Task<IActionResult> AddCars([FromBody] CarCollectionModel car)
        {
            car.Vehicle_Id = Guid.NewGuid();
            await _carCollectionRepository.AddCarCollection(car);
            return Ok(car);
        }
        [HttpPut]
        [Route("editCar")]
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]

        public async Task<CarCollectionModel> EditCars( CarCollectionModel car)
        {
            var answer = await _carCollectionRepository.UpdateCarCollection(car);
            if (answer.Vehicle_Id != Guid.Empty)
            {
                return car;
            }
            return car;
        }
        [HttpDelete]
        [Route("deleteCar/{Id}")]
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
        public async Task<IActionResult> DeleteCar(Guid Id)
        {
            var car = await _carCollectionRepository.GetCarCollectionById(Id);
            if (car == null)
            {
                return NotFound();
            }
            await _carCollectionRepository.DeleteCarCollection(Id);
            return Ok(car);
        }

    }
}
