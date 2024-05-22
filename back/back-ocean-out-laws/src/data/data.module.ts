import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './data.service';
import { DataController } from './data.controller'; // Importez le contrôleur
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
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Spot]),
  ],
  providers: [DataService],
  controllers: [DataController], // Ajoutez le contrôleur ici
})
export class DataModule {}
