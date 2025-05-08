import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{
  carCollection: any[] = [];
  filteredCarCollection: any[] = []; 
  route = "getCars";
  email: any;
  searchText: string = ''; 
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private service : ServicesService){
    const userdata = sessionStorage.getItem('username');
    if (userdata) {
      const userData = JSON.parse(userdata);
      this.email = userData.email;
    }
    console.log(userdata);
    console.log(this.email);
  }
  ngOnInit(): void {
    this.service.getCars(this.route).subscribe((result:any)=>{
      console.warn("this is the result",result);
      this.carCollection = result;
      this.filterCars();
    })

  }
  filterCars() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
    if (searchTerm.trim() === '') {
      this.filteredCarCollection = [...this.carCollection];
    } else {
      this.filteredCarCollection = this.carCollection.filter((car) =>
        car.maker.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm) ||
        car.rentalPrice.toString().includes(searchTerm)
      );
    }
    console.warn(this.filteredCarCollection)
  }
  deleteCar(id: any) {
    console.log("my delete id is", id);
    this.service.deleteCar(id).subscribe(() => {
      console.warn("Delete function");
    });
    window.location.reload();
  }
}
