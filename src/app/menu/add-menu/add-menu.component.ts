import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu-services.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent  {
  
  menuForm: FormGroup;

  constructor(private fb: FormBuilder ,public menuService:MenuService , public dialog: MatDialog,) {
    this.menuForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')]]
    });
  }

  onSubmit(): void {
    if (this.menuForm.valid) {
      this.menuService.addMenuItem(this.menuForm.value)
      this.dialog.closeAll();
    }
  }
}
