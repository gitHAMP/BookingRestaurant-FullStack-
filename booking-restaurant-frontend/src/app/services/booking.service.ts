import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Booking } from '../models/booking-models';
import { LightRestaurant } from '../models/restaurant-ligth';

const API = 'http://localhost:8089/booking-restaurant/v1/';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllRestaurants() {
    return this.http.get(API + 'restaurants')
  }
  getRestaurant(id: number) {
    return this.http.get(API + 'restaurant' + '/' + id)
  }
  createReservation(booking: Booking) {
    return this.http.post(API + 'reservation', booking)
  }
  cancelReservation(reservationCode: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(API + 'deleteReservation?locator=' + reservationCode, options)
  }

  getAllRestaurantsMock() {
    const restaurants: LightRestaurant[] = []

    const restaurant1: LightRestaurant = {
      address: "Gran Rambla 145",
      id: 1,
      image: "https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_960_720.jpg",
      name: "Restaurante de David"
    }

    const restaurant2: LightRestaurant = {
      address: "Gran Rambla 145",
      id: 2,
      image: "https://cdn.pixabay.com/photo/2018/09/23/21/13/restaurant-3698548_960_720.jpg",
      name: "Restaurante de Juan"
    }
    restaurants.push(restaurant1)
    restaurants.push(restaurant2)

    return of(restaurants)
  }
}
