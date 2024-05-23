import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { Spot } from './data.entity';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async obtenirDonnees(): Promise<Spot[]> {
    return this.dataService.findAll();
  }

  @Get(':id')
  async obtenirUneDonnee(@Param('id') id: number): Promise<Spot> {
    return this.dataService.findOne(id);
  }
  @Post()
  async createSpot(@Body() spotData: Partial<Spot>) {  // Correction ici
    return this.dataService.createSpot(spotData);
  }
 @Delete(':id')
  async supprimerDonnee(@Param('id') id: number): Promise<void> {
    return this.dataService.remove(id);
  }
}
