import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public router: Router, public AuthS: AuthService) {
  }

  logoutUser() {
    if (this.AuthS.userRole == "admin") {
      localStorage.removeItem("admin")
    }else if (this.AuthS.userRole == "user") {
      localStorage.removeItem("user")
    }else if (this.AuthS.userRole == "owner") {
      localStorage.removeItem("owner")
    }
    this.router.navigateByUrl("/home")
  }
}
