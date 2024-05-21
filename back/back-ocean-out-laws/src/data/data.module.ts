import { Module } from '@nestjs/common';
// import { DataController } from './data.controller';
import { DataService } from './data.service';
import { Spot } from './data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'Spot',
    entities: [Spot],
    synchronize: true,
  }),],

  // controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}


