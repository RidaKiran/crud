import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}


