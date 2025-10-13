import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //pipe setup, checks that the received requests have only the things we expect === only the things we added to the dto
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
