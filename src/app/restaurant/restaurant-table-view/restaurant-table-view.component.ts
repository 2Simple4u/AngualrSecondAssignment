import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reastaurant } from 'src/app/model/reastaurant';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRestaurantFormComponent } from '../add-restaurant-form/add-restaurant-form.component';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { UpdateRestaurantComponent } from '../update-restaurant/update-restaurant.component';
import { MenuService } from 'src/app/services/menu-services.service';

@Component({
  selector: 'app-restaurant-table-view',
  templateUrl: './restaurant-table-view.component.html',
  styleUrls: ['./restaurant-table-view.component.scss']
})

export class RestaurantTableViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  dataSource = new MatTableDataSource<Reastaurant>([])
  menuItems: any[] = [];

  constructor(private router: Router,
    public dialog: MatDialog,
    public restaurantService: RestaurantServiceService,
    private menuService: MenuService

  ) {
    this.restaurantService.getRestaurantItems();
  }


  ngOnInit(): void {
    this.restaurantService.resturantItemsSubject.subscribe((res: MatTableDataSource<Reastaurant>) => {
      this.dataSource = res;
      console.log(this.dataSource,"datasource");
      
    })
  }

  updateRestaurant(id: number, item: Reastaurant): void {
    const dialogRef = this.dialog.open(UpdateRestaurantComponent, {
      width: '500px',
      data: { data: item, id: id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
    console.log('Update restaurant with ID:', id);
  }

  deleteRestaurant(id: number): void {
    this.restaurantService.deleteRestaurantItem(id);
    console.log('Delete restaurant with ID:', id);
  }

  restaurantAssignedMenu(id: any) {
    this.router.navigate(["/admin/restaurantMenu/"], {
      queryParams: {
        id: id
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRestaurantFormComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


