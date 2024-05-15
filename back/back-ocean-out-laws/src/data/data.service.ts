import { Injectable } from '@nestjs/common';
//import data from '../data.json'
@Injectable()
export class DataService {

  getData(): string {
    return "data";
  }
}

