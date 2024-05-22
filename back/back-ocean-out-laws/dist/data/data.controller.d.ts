import { DataService } from './data.service';
import { Spot } from './data.entity';
export declare class DataController {
    private readonly dataService;
    constructor(dataService: DataService);
    obtenirDonnees(): Promise<Spot[]>;
    obtenirUneDonnee(id: number): Promise<Spot>;
    createSpot(spotData: Partial<Spot>): Promise<Spot>;
    supprimerDonnee(id: number): Promise<void>;
}
