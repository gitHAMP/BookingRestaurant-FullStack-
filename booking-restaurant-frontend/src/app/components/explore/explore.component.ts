import { Component, OnInit } from '@angular/core';
import { LightRestaurant } from 'src/app/models/restaurant-ligth';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  public restaurants: LightRestaurant[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllRestaurants().subscribe((result: any) => {
      this.restaurants = result.data;
    })
  }

}
