import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item';
import { MenuService } from 'src/app/services/menu-services.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-menu-view',
  templateUrl: './restaurant-menu-view.component.html',
  styleUrls: ['./restaurant-menu-view.component.scss']
})
export class RestaurantMenuViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'select'];
  dataSource: MatTableDataSource<MenuItem> = new MatTableDataSource<MenuItem>()
  selectedDisplayedColumns: string[] = ['id', 'name', 'price', 'description', 'remove'];

  selectedItems: MatTableDataSource<MenuItem> = new MatTableDataSource<MenuItem>()
  RESTAURANT_ID: number = -1
  DATA_CHANGES_DETECT: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public menuService: MenuService,
    public restaurantService: RestaurantServiceService) {
    menuService.getMenuItems();
    this.DATA_CHANGES_DETECT = false;
  }

  ngOnInit() {
    let routerdata: any = this.router;
    this.RESTAURANT_ID = routerdata?.browserUrlTree?.queryParams?.id;

    // write try and catch block for subscribe
    this.menuService.menuItemsSubject.subscribe((res: MatTableDataSource<MenuItem>) => {
      this.dataSource = res;
      let restaurantData = this.restaurantService.getRestaurantById(this.RESTAURANT_ID);
      if (restaurantData.length != 0) {
        this.selectedItems.data = restaurantData[0].menuList
        this.dataSource.data.forEach((item: MenuItem) => {
          let MenuFilter: any = this.selectedItems.data.filter((menuitem: MenuItem) => menuitem.id == item.id)
          if (MenuFilter.length != 0) {
            item['disabled'] = true
          } else {
            item['disabled'] = false
          }
        })
      }
    });
  }

  onCheckboxChange(index: number, event: any) {
    const menu = this.dataSource.data[index];
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
    this.selectedItems.data = updatedList;
    this.addMenuToParticularRestaurant();
  }


  addMenuToParticularRestaurant() {
    console.log(this.selectedItems, "addMenuToParticularRestaurant ");
    let restaurantData = this.restaurantService.getRestaurantById(this.RESTAURANT_ID);
    if (restaurantData.lenght != 0) {
      restaurantData[0]['menuList'] = this.selectedItems.data;
      this.restaurantService.updateRestaurantItem(this.RESTAURANT_ID, restaurantData[0])
      this.ngOnInit();
      console.log(restaurantData, "restaurantData")
    }
  }
}
