import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ViewCarComponent } from './components/view-car/view-car.component';
import { ReturnRequestPageComponent } from './components/return-request-page/return-request-page.component';
import { AdminBookingDetailsComponent } from './components/admin-booking-details/admin-booking-details.component';
import { UpdateBookingDetailsComponent } from './components/update-booking-details/update-booking-details.component';
import { UpdateCarDetailsComponent } from './components/update-car-details/update-car-details.component';
const routes: Routes = [
  {
    component: HomeComponent,
    path: "Home"
  },
  {
    component: LoginComponent,
    path: "Login"
  },
  {
    component: RegisterComponent,
    path: "RegisterUser"
  },
  {
    component: AddCarsComponent,
    path: "AddCars"
  },
  {
    component: CarsListComponent,
    path: ""
  },
  {
    component:BookingPageComponent,
    path:"BookingPage/:id"
  },
  {
    component:ViewOrderComponent,
    path: "ViewBookings"
  },
  {
    component: ViewCarComponent,
    path: "CarDetails/:id"
  },
  {
    component : ReturnRequestPageComponent,
    path: "ReturnRequests"
  },
  {
    component: AdminBookingDetailsComponent,
    path: "Bookings"
  },
  {
    component: UpdateBookingDetailsComponent,
    path : "Bookings/UpdateBooking/:id"
  },
  {
    component: UpdateCarDetailsComponent,
    path: "UpdateProduct/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
