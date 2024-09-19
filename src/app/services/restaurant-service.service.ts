import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reastaurant } from '../model/reastaurant';
import { MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  private static LOCAL_STORAGE_KEY = 'restaurant-list';
  public resturantItemsSubject: BehaviorSubject<MatTableDataSource<Reastaurant>> = new BehaviorSubject<MatTableDataSource<Reastaurant>>(new MatTableDataSource<Reastaurant>());

  public getRestaurantItems() {
    try {
      const items = localStorage.getItem(RestaurantServiceService.LOCAL_STORAGE_KEY);
      if (items) {
        const parsedItems: Reastaurant[] = JSON.parse(items);
        const dataSource = new MatTableDataSource<Reastaurant>(parsedItems);
        this.resturantItemsSubject.next(dataSource);
        return parsedItems;
      }
    } catch (error) {
      console.error('Failed to retrieve restaurant from localStorage:', error);
    }
    return [];

  }

  saveRestaurant(items: MatTableDataSource<Reastaurant>): void {
    localStorage.setItem(RestaurantServiceService.LOCAL_STORAGE_KEY, JSON.stringify(items));
    this.resturantItemsSubject.next(items); // Update the observable
  }

  addRestaurant(newRestaurant: Reastaurant): void {
    let items: any = this.getRestaurantItems();
    newRestaurant['id'] = items?.length != undefined && items?.length != 0 ? parseFloat(items[items?.length - 1]["id"]) + 1 : 1;
    items.push(newRestaurant);
    this.saveRestaurant(items);
    console.log("item added");

  }

  updateRestaurantItem(id: number, updatedItem: Reastaurant): void {
    const items: any = this.getRestaurantItems();
    const index = items.findIndex((item: any) => item.id.toString() === id.toString());
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItem };
      this.saveRestaurant(items);
    } else {
      throw new Error('Restaurant not found');
    }
  }

  // Delete a menu item by id
  deleteRestaurantItem(id: any): void {
    let items: any = this.getRestaurantItems();
    items = items.filter((item: any) => item.id !== id);
    this.saveRestaurant(items);
  }
  // Methods for Manipulating Restaurant MenuList

  public getRestaurantById(id:number){
    let items: any = this.getRestaurantItems();
    console.log(items,"items............");
    items = items.filter((item: any) => item.id == id);
    return items;
  }
}
