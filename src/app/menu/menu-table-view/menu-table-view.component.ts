import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuItem } from '../../model/menu-item';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuComponent } from '../add-menu/add-menu.component';
import { MenuService } from 'src/app/services/menu-services.service';
import { UpdateMenuComponent } from '../update-menu/update-menu.component';

@Component({
  selector: 'app-menu-table-view',
  templateUrl: './menu-table-view.component.html',
  styleUrls: ['./menu-table-view.component.scss']
})
export class MenuTableViewComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'action'];
  dataSource: MatTableDataSource<MenuItem> = new MatTableDataSource<MenuItem>()
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public menuService: MenuService) {
    //  MENU_DATA: MenuItem[]
    menuService.getMenuItems();
  }

  ngOnInit() {
    this.menuService.menuItemsSubject.subscribe((res: MatTableDataSource<MenuItem>) => {
      this.dataSource = res;
    });
   
  }


  deleteItem(id: number): void {
    console.log('Delete item with ID:', id);
    this.menuService.deleteMenuItem(id)
  }

  updateItem(id: number,item:MenuItem): void {
    console.log('Update item with ID:', id);
    const dialogRef = this.dialog.open(UpdateMenuComponent, {
      width: '500px',
      data: {data:item,id:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMenuComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

 
}

