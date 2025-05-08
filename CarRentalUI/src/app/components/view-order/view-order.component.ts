import { Component ,OnInit} from '@angular/core';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit{
  email : any ;
  route = "getCarAgreement";
  collection: any = [];

  constructor(private service: ServicesService){
    const userdata = sessionStorage.getItem('username');
    if (userdata) {
      const userData = JSON.parse(userdata);
      this.email = userData.email;
    }
    console.log(userdata);
    console.log(this.email);
  }
  ngOnInit(): void {
    this.service.getAgreement(this.route).subscribe((result:any)=>{
      console.log("result", result);
      this.collection = result;
    })
  }
  returnCar(id:any){
    console.log("Return Car", id);
    this.service.isReturn(id).subscribe(() => {
      console.warn("Return Requested");
    });
    window.location.reload();
  }
}
