import { Greetings } from '@a-boss/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): Greetings[] {
    return [{ message: 'Mesaje 1' }, { message: 'Mesaje 2' }];
  }
}
