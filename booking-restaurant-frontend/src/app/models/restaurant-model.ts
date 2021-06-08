import { LightRestaurant } from "./restaurant-ligth";

export interface Restaurant extends LightRestaurant {
    description: string
    turn: any[]

    /*constructor(id: number, name: string, image: string, address: string, description: string, turn: any[]) {
        super(id, name, image, address);
        this.description = description;
        this.turn = turn;
    }*/
}