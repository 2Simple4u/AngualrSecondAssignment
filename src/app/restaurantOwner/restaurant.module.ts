import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedCommonModule } from "../shared/common.module";
import { restaurantOwnerModule } from "./restaurant-routing.module";
import { RestaurantOwnerViewComponent } from "./restaurant-owner-view/restaurant-owner-view.component";
import { MenuDialogComponent } from "./menu-dialog/menu-dialog.component";
import { RestaurantOwnerTableViewComponent } from "./restaurant-owner-table-view/restaurant-owner-table-view.component";

@NgModule({

    declarations: [
        RestaurantOwnerViewComponent,
        MenuDialogComponent,
        RestaurantOwnerTableViewComponent,

    ],
    imports: [
        CommonModule,
        SharedCommonModule,
        restaurantOwnerModule,

    ],
    exports: [
        RestaurantOwnerViewComponent,
        MenuDialogComponent,
        RestaurantOwnerTableViewComponent
    ],
    providers: [],
})
export class RestaurantModule { }
