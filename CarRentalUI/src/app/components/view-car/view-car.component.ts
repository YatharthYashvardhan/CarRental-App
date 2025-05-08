import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit{
  collection : any = [];
  id:any;
  route = "getCars";
  constructor(private service : ServicesService, private router : ActivatedRoute){
  }
  ngOnInit(): void {
    console.warn(this.router)
    this.id = this.router.snapshot.params['id'];
    console.log("Id is", this.id)
    this.service.getCars(this.route).subscribe((result: any) => {
      console.warn("get product call", result)
      result.forEach((object: any) => {
        console.warn("Object Id", object.vehicle_Id)
        if (this.id == object.vehicle_Id) {
          console.log(object);
          this.collection.push(object);
        }
        else{
          console.log("Nooooooooooooooooo")
        }
      });
      console.log("revieced collection data", this.collection);
    })

}
}
