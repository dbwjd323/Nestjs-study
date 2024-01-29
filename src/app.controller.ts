import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; //ConfigService 임포트

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {} //ConfigService 주입

  @Get()
  getHello(): string {
    const message = this.configService.get('MESSAGE'); //configService.get() 호출
    return message;
  }
}
