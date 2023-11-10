import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { LoggerMiddlewareF } from './common/middleware/loggerF.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, LoggerMiddlewareF)
      .forRoutes({ path: 'cats', method: RequestMethod.ALL });
  }
}
