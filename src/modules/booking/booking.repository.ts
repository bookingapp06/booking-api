import { DataSource, MoreThan, Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingRepository extends Repository<Booking> {
  constructor(dataSource: DataSource) {
    super(Booking, dataSource.createEntityManager());
  }

  findTest() {
    return this.find({ where: { id: MoreThan(0) } });
  }
}
