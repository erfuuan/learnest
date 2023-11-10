import { Controller, Get, Req, Param, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
@Controller({ host: 'localhost' })
// @Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any[]> {
    return this.appService.getHello();
  }
}
