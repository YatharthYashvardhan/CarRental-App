import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-admin-booking-details',
  templateUrl: './admin-booking-details.component.html',
  styleUrls: ['./admin-booking-details.component.css']
})
export class AdminBookingDetailsComponent implements OnInit{
  collection: any = [];
  route = "getCarAgreement";

  constructor(private service : ServicesService){}
  ngOnInit(): void {
    this.service.getAgreement(this.route).subscribe((result:any)=>{
      console.log("result", result);
      this.collection = result;
  });
}
returnCar(id:any){
  console.log("Return Car", id);
  this.service.isReturned(id).subscribe(() => {
    console.warn("Returned Aprooved");
  });
  window.location.reload();
}
}
