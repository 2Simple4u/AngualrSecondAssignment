import { RouterModule, Routes } from "@angular/router";
import { UserViewComponent } from "../user/user-view/user-view.component";
import { NgModule } from "@angular/core";
import { UserRestaurantViewComponent } from "../user/user-restaurant-view/user-restaurant-view.component";
import { UserOrderConfirmationPageComponent } from "../user/user-order-confirmation-page/user-order-confirmation-page.component";

const routes: Routes = [{
    path: '',
    component: UserViewComponent,
    children: [
      { path: "restaurant", component: UserRestaurantViewComponent, pathMatch: "full" },
      { path: "checkout", component: UserOrderConfirmationPageComponent, pathMatch: "full" },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }