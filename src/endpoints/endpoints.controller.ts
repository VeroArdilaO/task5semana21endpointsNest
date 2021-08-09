/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, HttpStatus, Res, Query, Logger, Body } from '@nestjs/common';
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

  /*URL para get http://localhost:3000/endpoints?queryEjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3  */

  @Post()
  public post(@Query() query: any, @Body() body: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.CREATED).send({
      nombre: 'Post',
      query,
      body,
    });
  }

 /*  URL  http://localhost:3000/endpoints?queryEjemploPost=1 
 
  {"infoBodyPost": "jsonEnviadoEnElBody"} 
  
   */

  @Put()
  public put(@Query() query: any, @Body() body: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'Put',
      query,
      body,
    });
  }
  

 /*  
 
 URL  http://localhost:3000/endpoints?queryEjemploPut=1 
 
 {"infoBodyPut": "jsonEnviadoEnElBody"} 
 
 */

  @Delete()
  public delete(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'Delete',
      query,
    });
  }
}

  /*URL para delete http://localhost:3000/endpoints?queryEjemploDelete=1   */
