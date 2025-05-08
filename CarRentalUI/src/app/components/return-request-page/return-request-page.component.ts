import { Component , OnInit} from '@angular/core';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-return-request-page',
  templateUrl: './return-request-page.component.html',
  styleUrls: ['./return-request-page.component.css']
})
export class ReturnRequestPageComponent implements OnInit{
  route= "getCarAgreement"
  collection: any = []
  index:any = 0;
  constructor(private Service : ServicesService){}
  ngOnInit(): void {
    this.Service.getAgreement(this.route).subscribe((result:any)=>{

  
      result.forEach((object:any)=>{
        if(object.isReturnRequested == true){
   
          this.index = this.index+1;
        }
      })
      console.warn(this.index)
      console.warn("Result", result)
      this.collection = result
    })
  }
  returnCar(id:any){
    console.log("Return Car", id);
    this.Service.isReturned(id).subscribe(() => {
      console.warn("Returned Aprooved");
    });
    this.index -= 1;
    window.location.reload();
  }
  
  
}
