import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';

@Module({
  // imports: [UserModule],
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
