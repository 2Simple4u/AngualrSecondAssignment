import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu-services.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
@Component({
  selector: 'app-add-restaurant-form',
  templateUrl: './add-restaurant-form.component.html',
  styleUrls: ['./add-restaurant-form.component.scss']
})
export class AddRestaurantFormComponent {

  restaurantForm: FormGroup;
  constructor(private fb: FormBuilder,
    public restaurantService: RestaurantServiceService,
    public dialog: MatDialog,
    public menuService: MenuService
  ) {

    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      menuList: [[]]
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      let formValue = this.restaurantForm.value;
      this.restaurantService.addRestaurant(formValue)
      console.log(formValue);
      this.dialog.closeAll();
    }
  }
}



