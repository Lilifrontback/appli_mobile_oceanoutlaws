import { Repository } from 'typeorm';
import { Spot } from './data.entity';
export declare class DataService {
    private dataRepository;
    constructor(dataRepository: Repository<Spot>);
    findAll(): Promise<Spot[]>;
    findOne(id: number): Promise<Spot>;
    createSpot(newSpotData: Partial<Spot>): Promise<Spot>;
    remove(id: number): Promise<void>;
}
