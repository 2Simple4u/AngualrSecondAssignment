import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-order-confirmation-page',
  templateUrl: './user-order-confirmation-page.component.html',
  styleUrls: ['./user-order-confirmation-page.component.scss']
})
export class UserOrderConfirmationPageComponent {

  constructor(private dialogRef: MatDialogRef<UserOrderConfirmationPageComponent>,
    public dialog:MatDialog,
    public router:Router
  ) {}

  onClose(): void {
    this.router.navigateByUrl("/user")
    this.dialog.closeAll();
  }
}
