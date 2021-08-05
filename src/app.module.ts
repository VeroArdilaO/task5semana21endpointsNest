import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointsController } from './endpoints/endpoints.controller';

@Module({
  imports: [],
  controllers: [AppController, EndpointsController],
  providers: [AppService],
})
export class AppModule {}
