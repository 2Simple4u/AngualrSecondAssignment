import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedCommonModule } from '../shared/common.module';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AddMenuComponent } from '../menu/add-menu/add-menu.component';
import { UpdateMenuComponent } from '../menu/update-menu/update-menu.component';
import { RestaurantTableViewComponent } from '../restaurant/restaurant-table-view/restaurant-table-view.component';
import { MenuTableViewComponent } from '../menu/menu-table-view/menu-table-view.component';
import { AddRestaurantFormComponent } from '../restaurant/add-restaurant-form/add-restaurant-form.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { UpdateRestaurantComponent } from '../restaurant/update-restaurant/update-restaurant.component';
import { RestaurantMenuViewComponent } from '../restaurant/restaurant-menu-view/restaurant-menu-view.component';

@NgModule({
  declarations: [
    AdminViewComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    RestaurantTableViewComponent,
    AddRestaurantFormComponent,
    MenuTableViewComponent,
    UpdateRestaurantComponent,
    RestaurantMenuViewComponent,
  ],
  imports: [
    CommonModule,
    SharedCommonModule,
    AdminRoutingModule,
  
  ],
  exports:[
    AdminViewComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    RestaurantTableViewComponent,
    AddRestaurantFormComponent,
    MenuTableViewComponent,
    UpdateRestaurantComponent,
    RestaurantMenuViewComponent,
  ],
  providers: [],
})
export class AdminModule { }
