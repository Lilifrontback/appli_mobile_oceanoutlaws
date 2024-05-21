import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spot } from './data.entity';


@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Spot)
    private dataRepository: Repository<Spot>,
  ) {}

  findAll(): Promise<Spot[]> {
    return this.dataRepository.find();
  }

  findOne(id: number): Promise<Spot | null> {
    return this.dataRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.dataRepository.delete(id);
  }
}
// @Injectable()
// export class DataService {


  // getData(): any {
  //    // Lire le fichier JSON synchronement
  //    const rawData = fs.readFileSync('C:\\Users\\Lquem\\Desktop\\ADA\\projet mobile\\OceanOutlaws\\back\\back-ocean-out-laws\\src\\data\\data.json', 'utf8'); 
  //  // Parse les données JSON
  //   const jsonData = JSON.parse(rawData);
  //       // Filtrer et ne retourner que les champs id et fields de chaque enregistrement
  //       const filteredData = jsonData.records.map(record => ({
  //         fields: {
  //           SurfBreak: record.fields.SurfBreak,
  //           DifficultyLevel: record.fields.DifficultyLevel,
  //           Destination: record.fields.Destination,
  //           Address: record.fields.Address
            
  //         }
  //       }));
    
  //       // Retourner les données filtrées
  //       return filteredData;
  // }
//}


 
 
  
  