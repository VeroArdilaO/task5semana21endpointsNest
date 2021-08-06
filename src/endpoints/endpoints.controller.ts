/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, HttpCode, Post, Put, Param } from '@nestjs/common';

@Controller('endpoints')
export class EndpointsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  @Get(':EjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3')
  @HttpCode(200)
  public get(@Param('id') id) {
    console.log(id);
    return {
      name: 'GET',
      queryEjemploGet1: 1,
      queryEjemploGet2: 2,
      queryEjemploGet3: 3,
    };
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

  @Delete(':EjemploDelete=1')
  @HttpCode(200)
  public delete() {
    return { name: 'DELETE', queryEjemploDelete: 1 };
  }
}

