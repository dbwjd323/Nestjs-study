import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()], //ConfigModule 설정
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
