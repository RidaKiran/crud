import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StaffEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  Building: string;
}

