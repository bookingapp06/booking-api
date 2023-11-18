import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';

@Controller('/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getBookings(): Promise<Booking[]> {
    return this.bookingService.getBookings();
  }

  @Get('/create')
  getCreateBookings(): Promise<Booking> {
    return this.bookingService.createBooking();
  }
}
