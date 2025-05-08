import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: any;
  email : any;
  constructor() {
    this.isLoggedIn = sessionStorage.getItem('username') != null;
    console.log("login", this.isLoggedIn);

    const username = sessionStorage.getItem('username');
    if (username) {
      const userData = JSON.parse(username);
      this.email = userData.email;
    }
  }
  logout() {
    sessionStorage.clear();
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
  }
}
