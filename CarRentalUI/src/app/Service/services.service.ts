import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  urlaccount = "https://localhost:44322/api/Account"
  urlCarCollection = "https://localhost:44322/api/CarCollection"
  urlCarAgreement = "https://localhost:44322/api/CarRentalAgreement"

  Carcollection : any = [];
  CarAgreementCollection:any = []
  constructor(private http : HttpClient) { }

  RegisterUser(data:any , signup:any){
    return this.http.post(`${this.urlaccount}/${signup}`,data)
  }
  loginUser(data : any , signin:any){
    return this.http.post(`${this.urlaccount}/${signin}`,data)
  }
  addCars(data : any , route : any ){
    console.log("my auth toke",localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')?.toString()
    });
    return this.http.post(`${this.urlCarCollection}/${route}`,data, { headers })
  }
  getCars(getCars : any ){ 
    this.Carcollection = this.http.get(`${this.urlCarCollection}/${getCars}`)
    return this.Carcollection;
  }
  
  updateCar(data : any , route : any ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')?.toString()
    });
    console.log("update data", data);
    return this.http.put(`${this.urlCarCollection}/${route}`,data , {headers})
  }
  
  deleteCar(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')?.toString()
    });
    console.log("product headers is"+ headers);

    return this.http.delete(`${this.urlCarCollection}/deleteCar/${id}`,{ headers })
  }

  AddAgreement(data : any , route : any ){
    console.log("my auth toke",localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')?.toString()
    });
    return this.http.post(`${this.urlCarAgreement}/${route}`,data, { headers })
  }

  getAgreement(route : any ){ 
    this.CarAgreementCollection = this.http.get(`${this.urlCarAgreement}/${route}`)
    return this.CarAgreementCollection;
  }
  isReturn(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')?.toString()
    });
    return this.http.put(`${this.urlCarAgreement}/isReturn/${id}`, null, { headers });
  }
  isReturned(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')?.toString()
    });
    return this.http.delete(`${this.urlCarAgreement}/deleteAgreement/${id}`, { headers })
  }
  updateAgreement(data : any , route : any ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')?.toString()
    });
    console.log("update Agreement issss", data);
    return this.http.put(`${this.urlCarAgreement}/${route}`,data, { headers })
  }
  

}
