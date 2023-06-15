import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DramaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: String;
}

