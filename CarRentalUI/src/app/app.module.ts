import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from '@angular/forms'
import { DatePipe } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesService } from './Service/services.service';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ViewCarComponent } from './components/view-car/view-car.component';
import { ReturnRequestPageComponent } from './components/return-request-page/return-request-page.component';
import { AdminBookingDetailsComponent } from './components/admin-booking-details/admin-booking-details.component';
import { UpdateBookingDetailsComponent } from './components/update-booking-details/update-booking-details.component';
import { UpdateCarDetailsComponent } from './components/update-car-details/update-car-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddCarsComponent,
    CarsListComponent,
    BookingPageComponent,
    ViewOrderComponent,
    ViewCarComponent,
    ReturnRequestPageComponent,
    AdminBookingDetailsComponent,
    UpdateBookingDetailsComponent,
    UpdateCarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicesService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
