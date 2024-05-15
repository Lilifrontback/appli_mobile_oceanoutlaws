import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DataService {

  getData(): any {
     // Lire le fichier JSON synchronement
     const rawData = fs.readFileSync('C:\\Users\\User\\Desktop\\projet-collectif-mobile-front-oceanoutlaws\\back\\back-ocean-out-laws\\src\\data\\data.json', 'utf8');

   // Parse les données JSON
    const jsonData = JSON.parse(rawData);
     // Retourne les données parsées
    return jsonData;
  }
}


 
 
  
  