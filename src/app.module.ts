import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './modules/booking/booking.module';
import { dataSourceOptions } from '@app/database/data-source';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
