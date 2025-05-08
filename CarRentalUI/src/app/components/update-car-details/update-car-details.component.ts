import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-update-car-details',
  templateUrl: './update-car-details.component.html',
  styleUrls: ['./update-car-details.component.css']
})
export class UpdateCarDetailsComponent implements OnInit{
  route = "editCar"
  route2 = "getCars"
  carCollection:any = []
  answer:any = [] 

  addCars = new FormGroup({
    vehicle_Id : new FormControl(''),
    maker: new FormControl(''),
    model: new FormControl(''),
    rentalPrice: new FormControl(''),
    year: new FormControl(''),
    color: new FormControl(''),
    transmissionType: new FormControl(''),
    numberOfDoors: new FormControl(''),
    fuelType: new FormControl(''),
    mileage: new FormControl(''),
    lastMaintenanceDate: new FormControl(''),
  });
  constructor(private service : ServicesService, private activatedRoute : ActivatedRoute , private router : Router){
  }

ngOnInit() {
  var lastdatetime : any;
  const id = this.activatedRoute.snapshot.params['id'];
  this.addCars.patchValue({
    vehicle_Id: id
  });

  this.service.getCars(this.route2).subscribe((result: any) => {
    this.carCollection = result;

    result.forEach((data : any) => {
      var myid = String(data.vehicle_Id)
       if(id == myid)
       {
          this.answer = data;
          lastdatetime = new Date(data.lastMaintenanceDate);
          console.log("my date modified",lastdatetime);
          console.log("data fetch",this.answer);
       }
          
    });
    
    const year = lastdatetime.getFullYear();
    const month = String(lastdatetime.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(lastdatetime.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    
    console.log("last date",formattedDate);

    this.addCars = new FormGroup({
      vehicle_Id: new FormControl(id),
      maker: new FormControl(this.answer.maker),
      model: new FormControl(this.answer.model),
      rentalPrice: new FormControl(this.answer.rentalPrice),
      year: new FormControl(this.answer.year),
      color: new FormControl(this.answer.color),
      transmissionType: new FormControl(this.answer.transmissionType),
      numberOfDoors: new FormControl(this.answer.numberOfDoors),
      fuelType: new FormControl(this.answer.fuelType),
      mileage: new FormControl(this.answer.mileage),
      lastMaintenanceDate: new FormControl(formattedDate),
    });  
  });
}

  Submit(){
    console.log(this.addCars.value);
    console.log("my route",this.route);
    this.service.updateCar(this.addCars.value, this.route).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }


  get Maker(): FormControl {
    return this.addCars.get("maker") as FormControl;
  }

  get Model(): FormControl {
    return this.addCars.get("model") as FormControl;
  }

  get RentalPrice(): FormControl {
    return this.addCars.get("rentalPrice") as FormControl;
  }

  get Year(): FormControl {
    return this.addCars.get("year") as FormControl;
  }

  get Color(): FormControl {
    return this.addCars.get("color") as FormControl;
  }

  get TransmissionType(): FormControl {
    return this.addCars.get("transmissionType") as FormControl;
  }

  get NumberOfDoors(): FormControl {
    return this.addCars.get("numberOfDoors") as FormControl;
  }

  get FuelType(): FormControl {
    return this.addCars.get("fuelType") as FormControl;
  }


  get Mileage(): FormControl {
    return this.addCars.get("mileage") as FormControl;
  }

  get LastMaintenanceDate(): FormControl {
    return this.addCars.get("lastMaintenanceDate") as FormControl;
  }
}