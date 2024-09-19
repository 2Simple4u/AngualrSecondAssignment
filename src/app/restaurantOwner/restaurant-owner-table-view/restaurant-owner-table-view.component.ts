import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item';
import { Reastaurant } from 'src/app/model/reastaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-restaurant-owner-table-view',
  templateUrl: './restaurant-owner-table-view.component.html',
  styleUrls: ['./restaurant-owner-table-view.component.scss']
})
export class RestaurantOwnerTableViewComponent {
  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  dataSource = new MatTableDataSource<Reastaurant>([])
  menuItems: any[] = [];

  constructor(private router: Router,
  public dialog: MatDialog,
  public restaurantService: RestaurantServiceService,

  ) {
    this.restaurantService.getRestaurantItems();
  }


  ngOnInit(): void {
    try {
      this.restaurantService.resturantItemsSubject.subscribe((res: MatTableDataSource<Reastaurant>) => {
        this.dataSource = res;
        console.log(this.dataSource, "datasource");
    })
    } catch (error) {
      console.log(error,"data not found");
      
    }
  }
  openDialog(item:MenuItem[]): void {
    console.log(item,"openDialog      mmmmmmmmmmmmmm");
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '800px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

