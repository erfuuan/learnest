import { Controller, Get, Req ,HttpCode} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  testApi(@Req() request: Request): string {
    return this.appService.testApi();
  }

  @Get('ping2')
  @HttpCode(204)
  testApi2(@Req() request: Request): string {
    return this.appService.testApi();
  }
}
