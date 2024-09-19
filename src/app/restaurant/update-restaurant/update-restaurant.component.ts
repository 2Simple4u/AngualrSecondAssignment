import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})
export class UpdateRestaurantComponent {

  restaurantForm: FormGroup;
  
  constructor(private fb: FormBuilder, public restaurantService:RestaurantServiceService ,
     public dialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.restaurantForm = this.fb.group({
        name: ['', Validators.required],
        location: ['', Validators.required]
      });
   
  }


  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      const formData = this.data?.data;
      console.log(formData);
      ;
      // Optionally handle the id field if needed
      if (formData.id) {
        this.restaurantForm.patchValue({
          name: formData.name,
          location:formData.location
        });
      } else {
        const { id, ...rest } = formData;
        this.restaurantForm.patchValue(rest);
      }
    }
  }

  updateData(): void {
    if (this.restaurantForm.valid) {
      let id = this.data.id
      this.restaurantService.updateRestaurantItem(id ,this.restaurantForm.value)
      this.dialog.closeAll();
    }
  }

}
