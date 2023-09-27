import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { user } from './user/user.entity';
import { TypeORMConfig } from './config';


@Module({
  imports: [TypeORMConfig 
  ,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
