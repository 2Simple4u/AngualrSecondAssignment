// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("kujghjgyugyug",this.authService.isAdminAuthenticated())
    if (this.authService.isAdminAuthenticated() == true) {
      return true;
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
