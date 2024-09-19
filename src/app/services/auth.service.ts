// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userRole: string | null = null; // Replace this with actual logic to get user role

  constructor(private router: Router) { }

  // Mock login method
  login(role: string) {
    this.userRole = role; // Set user role
    // Additional login logic...
  }

  logout() {
    this.userRole = null; // Clear user role
    // Additional logout logic...
  }

  getRole() {
    return this.userRole;
  }

  isAdminAuthenticated() {
    const AdminData: any = localStorage.getItem('admin') ?? {}
    if (Object.keys(AdminData)?.length != 0) {
      const data = JSON.parse(AdminData)
      this.userRole = data?.role;
      return data.role == 'admin' ? true : false
    }
    return false
  }
  isUserAuthenticated() {
    const UserData: any = localStorage.getItem('user') ?? {}
    if (Object.keys(UserData)?.length != 0) {
      const data = JSON.parse(UserData)
      this.userRole = data?.role;
      return data.role == 'user' ? true : false
    }
    return false
  }
  isOwnerAuthenticated() {
    const OwnerData: any = localStorage.getItem('owner') ?? {}
    if (Object.keys(OwnerData)?.length != 0) {
      const data = JSON.parse(OwnerData)
      this.userRole = data?.role;
      return data.role == 'owner' ? true : false
    }
    return false
  }

  isAuthorized(roles: string[]) {
    return roles.includes(this.userRole!);
  }
}
