import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item';
import { UserCheckout } from 'src/app/model/user';
import { MenuService } from 'src/app/services/menu-services.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { UserOrderConfirmationPageComponent } from '../user-order-confirmation-page/user-order-confirmation-page.component';

@Component({
  selector: 'app-menu-selection-dialog',
  templateUrl: './menu-selection-dialog.component.html',
  styleUrls: ['./menu-selection-dialog.component.scss']
})
export class MenuSelectionDialogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'select'];
  dataSource: MenuItem[] = []
  orderdataSourse: MatTableDataSource<UserCheckout> = new MatTableDataSource<UserCheckout>()
  selectedDisplayedColumns: string[] = ['id', 'name', 'price', 'description', 'action'];
  selectedItems: MatTableDataSource<MenuItem> = new MatTableDataSource<MenuItem>()
  RESTAURANT_ID: number = -1
  DATA_CHANGES_DETECT: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public userservice: UserServicesService,
    public restaurantService: RestaurantServiceService,
    @Inject(MAT_DIALOG_DATA) public data: { item: MenuItem[], id: number }) {
    this.dataSource = this.data?.item
    this.dataSource.forEach(element => {
      element['disabled'] = false
    });
    this.DATA_CHANGES_DETECT = false;
  }

  ngOnInit() {
    this.dataSource.forEach((item: MenuItem) => {
      let MenuFilter: any = this.selectedItems.data.filter((menuitem: MenuItem) => menuitem.id == item.id)
      if (MenuFilter.length != 0) {
        item['disabled'] = true
      } else {
        item['disabled'] = false
      }
    })
  }

  ORDER_DATA: UserCheckout[] = []
  onCheckboxChange(index: number, event: any) {
    const menu = this.dataSource[index];
    let oldData: any = this.selectedItems.data;
    if (event.checked) {
      oldData.push(menu);
      this.selectedItems.data = oldData
    } else {
      this.selectedItems.data = oldData.filter((item: any) => item.id !== menu.id) as MenuItem[];
    }
  }

  removeItem(item: MenuItem) {
    const updatedList = this.selectedItems.data.filter((data: any) => data.id !== item.id)
    this.dataSource.forEach((data: MenuItem) => {
      if (data['id'] == item.id) {
        data['disabled'] = false
      }
    })
    this.selectedItems.data = updatedList;
  }

  CheckOutOrder() {
    let data: UserCheckout = {
      userId: 1,
      restaurantId: this.data.id,
      userSelectedMenuList: this.selectedItems.data
    }
    this.userservice.addOrder(data)
  }

  openCheckOutConfirmationPage(){
      const dialogRef = this.dialog.open(UserOrderConfirmationPageComponent, {
        width: '70vw',
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  close() {
    this.dialog.closeAll();
  }
}

