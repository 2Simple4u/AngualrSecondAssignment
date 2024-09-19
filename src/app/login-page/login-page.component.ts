import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm: FormGroup;

  dummyAdmin: any = [] =
    [{ name: "deepak", email: "deepak@gmail.com", role: 'admin', password: 'admin' },
    { name: "owner", email: "owner@gmail.com", role: 'owner', password: 'admin' },
    { name: "user", email: "user@gmail.com", role: 'user', password: 'admin' }
    ];

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }



  onSubmit() {
    try {
      if (this.loginForm.valid == true) {
        const formValue = this.loginForm.value
        const formValidation = this.dummyAdmin.filter((item: any) => item.email == formValue.email && item.password == formValue.password)
        if (formValidation.length != 0) {
          if (formValidation[0].role == "admin") {
            localStorage.setItem('admin',JSON.stringify(formValidation[0]))
            this.router.navigateByUrl('/admin')
          } else if (formValidation[0].role == "owner") {
            localStorage.setItem('owner',JSON.stringify(formValidation[0]))
            this.router.navigateByUrl('/restaurantOwner')
          } else if (formValidation[0].role == "user") {
            localStorage.setItem('user',JSON.stringify(formValidation[0]))
            this.router.navigateByUrl('/user')
          } else {
            alert("User Not Found")
          }
        } else {
          alert("Invalid")
        }
      }
    } catch (error) {
      console.log(error);

    }
  }


}
