
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MenuItem } from 'src/app/model/menu-item';


@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent {

  displayedColumns: string[] = ['id', 'name', 'description', 'price'];
  menus:MenuItem[]=[]
  constructor(public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: MenuItem[]  ) {
    this.menus = this.data
  }
  
  close(){
    this.dialog.closeAll();
    console.log("menu-dialog close");
  }
}
