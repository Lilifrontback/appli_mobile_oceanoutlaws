import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
//import { DataModule } from './data/data.module';


@Module({
  imports: [],

  controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}


