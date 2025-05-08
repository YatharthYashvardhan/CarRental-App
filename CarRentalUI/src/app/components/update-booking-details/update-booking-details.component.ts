import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-update-booking-details',
  templateUrl: './update-booking-details.component.html',
  styleUrls: ['./update-booking-details.component.css']
})
export class UpdateBookingDetailsComponent implements OnInit {
  agreementCollection: any = [];
  answer:any = []
  route = "getCarAgreement";
  route2 = "EditAgreement";

  agreementData = new FormGroup({
    id: new FormControl(''),
    rentalStartDate: new FormControl(''),
    rentalEndDate: new FormControl(''),
    userEmail:new FormControl('')
  });

  constructor(
    private service: ServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    var lastdatetime : any;
    var startdatetime: any
    const id = this.activatedRoute.snapshot.params['id'];
  this.agreementData.patchValue({
    id: id
  });
    this.service.getAgreement(this.route).subscribe((result: any) => {
      console.warn("Result", result);
      this.agreementCollection = result;
      result.forEach((object: any) => {
        if (id == object.id) {
          this.answer = object
          console.log("Answer", this.answer)
          startdatetime = new Date(object.rentalStartDate)
          lastdatetime = new Date(object.rentalEndDate)
        }
      });
    const year = lastdatetime.getFullYear();
    const month = String(lastdatetime.getMonth() + 1).padStart(2, '0');
    const day = String(lastdatetime.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const year2 = startdatetime.getFullYear();
    const month2 = String(startdatetime.getMonth() + 1).padStart(2, '0');
    const day2 = String(startdatetime.getDate()).padStart(2, '0');

    const formattedDate2 = `${year}-${month}-${day}`;

    this.agreementData = new FormGroup({
      id : new FormControl(id),
      rentalStartDate: new FormControl(formattedDate2),
      rentalEndDate: new FormControl(formattedDate),
      userEmail: new FormControl(this.answer.userEmail)
    })     
    });
  }

  Submit() {
    console.warn("Updated Data", this.agreementData.value);
    this.service.updateAgreement(this.agreementData.value, this.route2).subscribe(() => {
      // Handle success or any further actions
    });
  }
}
