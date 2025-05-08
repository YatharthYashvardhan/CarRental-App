import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private user: ServicesService,private loginrouter : Router) {}

  collection : any = []

  route = "signup"
  ngOnInit(): void {
    
  }
  CollectUser(){ 
    console.log('Form Details', this.registerForm)
    if (this.registerForm.valid)
    {
      console.log("success",this.registerForm);
    }
    else {
      console.log("fail");
      this.registerForm?.markAsTouched();
      console.log("add user val",this.registerForm);
      
    }
    this.user.RegisterUser(this.registerForm.value , this.route).subscribe((result)=>{
      console.warn("result is here",result)
      this.collection = result;
      if(this.collection != null)
      {
        this.registerForm.reset()
        this.loginrouter.navigate(['/']);   
      }
      
    })
  }
  get FullName() :FormControl {
    return this.registerForm.get("fullName") as FormControl;
  }
  
  get Email() : FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  
  get PhoneNumber() : FormControl{
    return this.registerForm.get("phoneNumber") as FormControl;
  }
  
  get Password() : FormControl{
    return this.registerForm.get("password") as FormControl;
  }
  
  get confirmPassword() : FormControl{
    return this.registerForm.get("confirmPassword") as FormControl;
  }
}
