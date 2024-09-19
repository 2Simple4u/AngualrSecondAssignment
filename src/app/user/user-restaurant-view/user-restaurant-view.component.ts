import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item';
import { Reastaurant } from 'src/app/model/reastaurant';
import { MenuService } from 'src/app/services/menu-services.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { MenuSelectionDialogComponent } from '../menu-selection-dialog/menu-selection-dialog.component';

@Component({
  selector: 'app-user-restaurant-view',
  templateUrl: './user-restaurant-view.component.html',
  styleUrls: ['./user-restaurant-view.component.scss']
})
export class UserRestaurantViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  dataSource = new MatTableDataSource<Reastaurant>([])
  menuItems: any[] = [];

  constructor(private router: Router,
    public dialog: MatDialog,
    public restaurantService: RestaurantServiceService,
    private menuService: MenuService) {
    this.restaurantService.getRestaurantItems();
  }

  ngOnInit(): void {
    try {
      this.restaurantService.resturantItemsSubject.subscribe((res: MatTableDataSource<Reastaurant>) => {
        this.dataSource = res;
        console.log(this.dataSource, "datasource");
      })
    } catch (error) {
      console.log(error, "data not found");
    }
  }

  openDialog(item: MenuItem[], id: number): void {
    console.log(item, "openMenu");
    const dialogRef = this.dialog.open(MenuSelectionDialogComponent, {
      width: '70vw',
      data: { item: item, id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
