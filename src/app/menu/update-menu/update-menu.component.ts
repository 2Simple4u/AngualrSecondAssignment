import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu-services.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent implements OnInit {

  menuForm: FormGroup;
  
  constructor(private fb: FormBuilder, public menuService: MenuService,
     public dialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.menuForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]]
      });
   
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      // Ensure `data` is properly structured
      const formData = this.data?.data; // Assuming `this.data` is the actual form data object

      // Optionally handle the id field if needed
      if (formData.id) {
        this.menuForm.patchValue({
          name: formData.name,
          description: formData.description,
          price: formData.price
        });
      } else {
        // If `id` should not be in the form, use this approach
        const { id, ...rest } = formData;
        this.menuForm.patchValue(rest);
      }
    }
  }

  updateData(): void {
    if (this.menuForm.valid) {
      let id = this.data.id
      this.menuService.updateMenuItem(id ,this.menuForm.value)
      this.dialog.closeAll();
    }
  }
}