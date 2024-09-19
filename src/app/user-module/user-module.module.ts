import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from '../user/user-view/user-view.component';
import { SharedCommonModule } from '../shared/common.module';
import { UserRestaurantViewComponent } from '../user/user-restaurant-view/user-restaurant-view.component';
import { UserRoutingModule } from './user-routing.module';
import { UserServicesService } from '../services/user-services.service';
import { UserOrderConfirmationPageComponent } from '../user/user-order-confirmation-page/user-order-confirmation-page.component';

@NgModule({
  declarations: [
    UserViewComponent,
    UserRestaurantViewComponent,
    UserOrderConfirmationPageComponent
  ],
  imports: [
    CommonModule,
    SharedCommonModule,
    UserRoutingModule
    
  ],
  exports:[
    UserViewComponent,
    UserOrderConfirmationPageComponent
  ],
  providers:[UserServicesService]
})
export class UserModuleModule { }
