using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace YYvMiniProject.Buisness.Models
{
    public class CarCollectionModel
    {
        [Key]
        public Guid Vehicle_Id { get; set; }

        [Required(ErrorMessage = "The Maker field is required.")]
        public string Maker { get; set; }

        [Required(ErrorMessage = "The Model field is required.")]
        public string Model { get; set; }

        [Required(ErrorMessage = "The RentalPrice field is required.")]
        [Range(0, double.MaxValue, ErrorMessage = "The RentalPrice must be a non-negative value.")]
        public decimal RentalPrice { get; set; }

        public bool Availability { get; set; } = true;



        [Required(ErrorMessage = "The Year field is required.")]
        [Range(1886, int.MaxValue, ErrorMessage = "Please enter a valid Year.")]
        public int Year { get; set; }

        public string Color { get; set; }

        public string TransmissionType { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "The NumberOfDoors must be a positive value.")]
        public int NumberOfDoors { get; set; }

        public string FuelType { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "The Mileage must be a non-negative value.")]
        public int Mileage { get; set; }

        [Display(Name = "Last Maintenance Date")]
        [DataType(DataType.Date)]
        public DateTime? LastMaintenanceDate { get; set; }


    }
}
