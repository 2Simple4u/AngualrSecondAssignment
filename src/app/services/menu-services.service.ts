import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { MatTableDataSource } from '@angular/material/table';


@Injectable({
  providedIn: 'root'
})
export class MenuService {


  private static LOCAL_STORAGE_KEY = 'menuItems';

  // BehaviorSubject to keep track of the menu items
  public menuItemsSubject: BehaviorSubject<MatTableDataSource<MenuItem>> = new BehaviorSubject<MatTableDataSource<MenuItem>>(new MatTableDataSource<MenuItem>());

  constructor() {
  }

  // Get all menu items
  public getMenuItems() {
    try {
      const items = localStorage.getItem(MenuService.LOCAL_STORAGE_KEY);
      if (items) {
        const parsedItems: MenuItem[] = JSON.parse(items);
        const dataSource = new MatTableDataSource<MenuItem>(parsedItems);
        this.menuItemsSubject.next(dataSource);
        return parsedItems;
      }
    } catch (error) {
      console.error('Failed to retrieve menu items from localStorage:', error);
    }
    return [];
  }

  // Save menu items to local storage
  private saveMenuItems(items: MatTableDataSource<MenuItem>): void {
    localStorage.setItem(MenuService.LOCAL_STORAGE_KEY, JSON.stringify(items));
    this.menuItemsSubject.next(items); // Update the observable
  }

  // Add a new menu item
  addMenuItem(newItem: MenuItem): void {
    let items: any = this.getMenuItems();
    newItem['id'] = items?.length != undefined && items?.length != 0 ? parseFloat(items[items?.length - 1]["id"]) + 1 : 1;
    items.push(newItem);
    this.saveMenuItems(items);
    console.log("item added");
  }

  // Update an existing menu item by id
  updateMenuItem(id: number, updatedItem: MenuItem): void {
    const items: any = this.getMenuItems();
    const index = items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItem };
      this.saveMenuItems(items);
    } else {
      throw new Error('Menu item not found');
    }
  }

  // Delete a menu item by id
  deleteMenuItem(id: any): void {
    let items: any = this.getMenuItems();
    items = items.filter((item: any) => item.id !== id);
    this.saveMenuItems(items);
  }
}

