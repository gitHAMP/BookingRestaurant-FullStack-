import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

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
    return this.http.delete(API + '?locator=' + reservationCode, options)
  }

}
