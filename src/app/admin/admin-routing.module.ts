import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { MenuTableViewComponent } from '../menu/menu-table-view/menu-table-view.component';
import { AddMenuComponent } from '../menu/add-menu/add-menu.component';
import { RestaurantTableViewComponent } from '../restaurant/restaurant-table-view/restaurant-table-view.component';
import { AddRestaurantFormComponent } from '../restaurant/add-restaurant-form/add-restaurant-form.component';
import { RestaurantMenuViewComponent } from '../restaurant/restaurant-menu-view/restaurant-menu-view.component';

const routes: Routes = [{
    path: '',
    component: AdminViewComponent,
    children: [
      { path: "menu", component: MenuTableViewComponent, pathMatch: "full" },
      { path: "addMenu", component: AddMenuComponent, pathMatch: "full" },
      { path: "restaurant", component: RestaurantTableViewComponent, pathMatch: "full" },
      { path: "addRestaurant", component: AddRestaurantFormComponent, pathMatch: "full" },
      { path: "restaurantMenu", component: RestaurantMenuViewComponent, pathMatch: "full" }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
