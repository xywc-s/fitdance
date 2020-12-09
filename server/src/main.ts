/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-11-27 14:10:11
 */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(csurf());
  // app.use(helmet({
    // contentSecurityPolicy: false
  // }));  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  const options = new DocumentBuilder()
    .setTitle('Fitdance')
    .setDescription('斐丹丝官网API文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); 
  await app.listen(3000);
}
bootstrap();
