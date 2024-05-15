import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataModule } from './data/data.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const data = await NestFactory.create(DataModule);
  await data.listen(3000)
  
}
bootstrap();
