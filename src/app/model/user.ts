import { MenuItem } from "./menu-item";

export interface UserCheckout {
    userId: number;
    restaurantId: number;
    userSelectedMenuList: MenuItem[]
}
