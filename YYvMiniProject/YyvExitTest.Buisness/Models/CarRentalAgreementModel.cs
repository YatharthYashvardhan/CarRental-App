using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace YYvMiniProject.Buisness.Models
{
    public class CarRentalAgreementModel
    {
        public int Id { get; set; }

        [Required]
        [ForeignKey("CarCollection")]
        public Guid CarId { get; set; }

        [Required]
        public string UserEmail { get; set; }

        [Required]
        public DateTime RentalStartDate { get; set; }
        [Required]
        public DateTime RentalEndDate { get; set; }

        [Required]
        public int RentalDuration { get; set; }

        [Required]
        public decimal TotalCost { get; set; }
        [Required]
        public bool IsBook { get; set; } = true;

        public bool IsReturnRequested { get; set; } = false;

        public bool IsReturned { get; set; } = false;

        public virtual CarCollectionModel Car { get; set; }
    }

}
