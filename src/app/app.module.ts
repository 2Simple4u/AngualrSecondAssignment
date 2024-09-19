import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCommonModule } from './shared/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuService } from './services/menu-services.service';
import { AdminModule } from './admin/admin.module';
import { UserModuleModule } from './user-module/user-module.module';
import { RestaurantModule } from './restaurantOwner/restaurant.module';
import { restaurantOwnerModule } from './restaurantOwner/restaurant-routing.module';
import { AuthService } from './services/auth.service';
import { MenuSelectionDialogComponent } from './user/menu-selection-dialog/menu-selection-dialog.component';
import { adminGuard } from './auth/admin-auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    PagenotfoundComponent,
    MenuSelectionDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedCommonModule,
    BrowserAnimationsModule,
    AdminModule,
    UserModuleModule,
    RestaurantModule,
    restaurantOwnerModule
  ],
  providers: [MenuService,AuthService,adminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
