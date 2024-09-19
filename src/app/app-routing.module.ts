import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { RestaurantOwnerViewComponent } from './restaurantOwner/restaurant-owner-view/restaurant-owner-view.component';
import { RestaurantTableViewComponent } from './restaurant/restaurant-table-view/restaurant-table-view.component';
import { adminGuard } from './auth/admin-auth.guard';
import { userAuthGuard } from './auth/user-auth.guard';
import { ownerAuthGuard } from './auth/owner-auth.guard';


const routes: Routes = [
  { path: "home", component: LandingPageComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginPageComponent, pathMatch: "full" },
  { path: "admin", loadChildren: () => import("../app/admin/admin.module").then(m => m.AdminModule),canActivate:[adminGuard]},
  { path: "user", loadChildren: () => import("../app/user-module/user-module.module").then(m => m.UserModuleModule),canActivate:[userAuthGuard] },
  { path: "restaurantOwner", loadChildren:()=> import("../app/restaurantOwner/restaurant.module").then(m=>m.RestaurantModule),canActivate:[ownerAuthGuard]},
  { path: "**", component: PagenotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
