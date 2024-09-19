import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class userAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("kujghjgyugyug",this.authService.isUserAuthenticated())
    if (this.authService.isUserAuthenticated() == true) {
      return true;
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

