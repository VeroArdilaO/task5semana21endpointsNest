import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'VERONICA ARDILA OSORIO';
  }
}
