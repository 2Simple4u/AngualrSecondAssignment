import { RouterModule, Routes } from "@angular/router";
import { RestaurantOwnerViewComponent } from "./restaurant-owner-view/restaurant-owner-view.component";
import { NgModule } from "@angular/core";
import { RestaurantOwnerTableViewComponent } from "./restaurant-owner-table-view/restaurant-owner-table-view.component";

const routes: Routes = [{
    path: '',
    component: RestaurantOwnerViewComponent,
    children: [
      { path: "list", component: RestaurantOwnerTableViewComponent, pathMatch: "full" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class restaurantOwnerModule { }
