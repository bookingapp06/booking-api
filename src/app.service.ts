import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! From other app version 0.0.1, Github action added';
  }
}
