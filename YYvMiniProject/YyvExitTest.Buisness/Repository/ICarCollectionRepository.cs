using YYvMiniProject.Buisness.Models;

namespace YYvMiniProject.Buisness.Repository
{
    public interface ICarCollectionRepository
    {
        Task<Guid> AddCarCollection(CarCollectionModel carCollection);
        Task<int> DeleteCarCollection(Guid id);
        Task<IEnumerable<CarCollectionModel>> GetAllCarCollections();
        Task<CarCollectionModel> GetCarCollectionById(Guid id);
        Task<CarCollectionModel> UpdateCarCollection(CarCollectionModel carCollection);
    }
}