import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './data.service';
import { Spot } from './data.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Spot',
      entities: [Spot],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Spot]),
  ],
  providers: [DataService],
})
export class DataModule {}
