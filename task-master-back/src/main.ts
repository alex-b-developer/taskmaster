import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');
  const corsOptions = {
    origin: 'http://localhost:3000', credentials: true,
    optionSuccessStatus: 200
  }
  app.use(cors(corsOptions));
  await app.listen(3001);
}
bootstrap();