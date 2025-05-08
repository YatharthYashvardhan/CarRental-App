import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css']
})
export class AddCarsComponent implements OnInit {
  addCars = new FormGroup({
    Maker: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Model: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    RentalPrice: new FormControl('', [Validators.required]),
    Year: new FormControl('', [Validators.min(1886)]),
    Color: new FormControl(''),
    TransmissionType: new FormControl(''),
    NumberOfDoors: new FormControl('', [Validators.min(1)]),
    FuelType: new FormControl(''),
    Mileage: new FormControl('', [Validators.min(0)]),
    LastMaintenanceDate: new FormControl(''),
  });
  collection: any = []
  route = "addCars"
  constructor(private service: ServicesService) { }

  Submit() {
    if (this.addCars.valid) {
      this.service.addCars(this.addCars.value, this.route).subscribe((result) => {
        console.log("Result of Cars", result)
        this.collection = result
        console.warn("Collection", this.collection);
      })
      this.addCars.reset();
      
    }
    else {
      console.log('Form validation errors');
      this.addCars.markAllAsTouched();
    }
  }

  ngOnInit(): void {

  }

  get Maker(): FormControl {
    return this.addCars.get("Maker") as FormControl;
  }

  get Model(): FormControl {
    return this.addCars.get("Model") as FormControl;
  }

  get RentalPrice(): FormControl {
    return this.addCars.get("RentalPrice") as FormControl;
  }

  get Year(): FormControl {
    return this.addCars.get("Year") as FormControl;
  }

  get Color(): FormControl {
    return this.addCars.get("Color") as FormControl;
  }

  get TransmissionType(): FormControl {
    return this.addCars.get("TransmissionType") as FormControl;
  }

  get NumberOfDoors(): FormControl {
    return this.addCars.get("NumberOfDoors") as FormControl;
  }

  get FuelType(): FormControl {
    return this.addCars.get("FuelType") as FormControl;
  }


  get Mileage(): FormControl {
    return this.addCars.get("Mileage") as FormControl;
  }

  get LastMaintenanceDate(): FormControl {
    return this.addCars.get("LastMaintenanceDate") as FormControl;
  }
}
