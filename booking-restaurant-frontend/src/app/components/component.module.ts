import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { ExploreComponent } from './explore/explore.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BookingComponent,
    ExploreComponent,
    CancelBookingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent
  ]
})
export class ComponentModule { }
