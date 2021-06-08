import { LightRestaurant } from "./restaurant-ligth";

export interface Restaurant extends LightRestaurant {
    description: string
    turn: any[]
}