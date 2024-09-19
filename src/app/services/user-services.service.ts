import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { UserCheckout } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private LOCAL_STORAGE_KEY = 'orders';

  public userCheckOutSubject: BehaviorSubject<MatTableDataSource<UserCheckout>> = new BehaviorSubject<MatTableDataSource<UserCheckout>>(new MatTableDataSource<UserCheckout>());

  public getUserCheckoutDetials() {
    try {
      const items = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      if (items) {
        const parsedItems: UserCheckout[] = JSON.parse(items);
        const dataSource = new MatTableDataSource<UserCheckout>(parsedItems);
        this.userCheckOutSubject.next(dataSource);
        return parsedItems;
      }
    } catch (error) {
      console.error('Failed to retrieve restaurant from localStorage:', error);
    }
    return [];

  }

  saveOrder(items: MatTableDataSource<UserCheckout>): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(items));
    this.userCheckOutSubject.next(items); // Update the observable
  }

  addOrder(checkout: UserCheckout): void {
    let items: any = this.getUserCheckoutDetials();
    items.push(checkout);
    this.saveOrder(items);
  }

  // updateRestaurantItem(id: number, updatedItem: Reastaurant): void {
  //   const items: any = this.getRestaurantItems();
  //   const index = items.findIndex((item: any) => item.id.toString() === id.toString());
  //   if (index !== -1) {
  //     items[index] = { ...items[index], ...updatedItem };
  //     this.saveRestaurant(items);
  //   } else {
  //     throw new Error('Restaurant not found');
  //   }
  // }

  // Delete a menu item by id
  deleteOrder(id: any): void {
    let items: any = this.getUserCheckoutDetials();
    items = items.filter((item: any) => item.id !== id);
    this.saveOrder(items);
  }
  // Methods for Manipulating Restaurant MenuList

  public getOrderById(id: number) {
    let items: any = this.getUserCheckoutDetials();
    console.log(items, "items............");
    items = items.filter((item: any) => item.id == id);
    return items;
  }
}
