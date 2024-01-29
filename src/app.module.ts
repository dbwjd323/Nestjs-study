import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';

console.log('env : ' + process.env.NODE_ENV); //기동 시 환경 변수 출력
console.log('currnet working directory : ' + process.cwd()); //현재 디렉터리 출력

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
    //환경 변수 파일 경로 지정
  }), WeatherModule], //ConfigModule 설정
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
