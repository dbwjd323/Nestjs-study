import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; //ConfigService 임포트

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {} //ConfigService 주입

  @Get('service-url') //http://localhost:3000/service-url의 경로 진입 시 실행
  getServiceUrl(): string{
    return this.configService.get('SERVICE_URL'); //SERVICE_URL 환경 변수 반환
  }
}
