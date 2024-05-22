import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spot {
  @PrimaryGeneratedColumn()
  id: number;

   @Column()
   SurfBreak: string;

  @Column()
  DifficultyLevel: number;

  @Column()
  Destination: string;

  @Column()
  Photo: string;

  @Column()
  Country: string;

  @Column()
  Adress: string;
  
 
}