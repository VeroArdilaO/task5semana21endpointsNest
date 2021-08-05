import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';

@Controller('endpoints')
export class EndpointsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  @Get()
  @HttpCode(200)
  public get() {
    return { name: 'GET' };
  }

  @Post()
  @HttpCode(201)
  public post() {
    return { name: 'POST' };
  }

  @Put()
  @HttpCode(201)
  public put() {
    return { name: 'PUT' };
  }

  @Delete()
  @HttpCode(200)
  public delete() {
    return { name: 'DELETE' };
  }
}
