import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LibraryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: String;
}

