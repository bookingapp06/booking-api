import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from './booking.repository';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingRepository)
    private readonly bookingRepository: BookingRepository,
  ) {}

  getBookings(): Promise<Booking[]> {
    return this.bookingRepository.findTest();
  }

  createBooking() {
    const booking = this.bookingRepository.create({
      service: Math.random().toString(),
    });

    return this.bookingRepository.save(booking);
  }
}
