import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeachersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subject: string;
}



