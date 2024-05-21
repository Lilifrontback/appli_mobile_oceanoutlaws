// spot.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Spot } from './data.entity';

@EntityRepository(Spot)
export class SpotRepository extends Repository<Spot> {
    // méthodes personnalisées pour le dépôt
}


