import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

}

