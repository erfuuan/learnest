
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export function LoggerMiddlewareF(req: Request, res: Response, next: NextFunction) {
    console.log('log from LoggerMiddlewareF');
    next();
}
