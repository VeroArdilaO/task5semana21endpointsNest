/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, HttpCode, Post, Put, HttpStatus, Res, Query, Logger } from '@nestjs/common';
import  {Response} from 'express';

@Controller('endpoints')
export class EndpointsController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
   @Get()
  public get(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'get',
      query,
    });
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
  public delete(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'get',
      query,
    });
  }
}

