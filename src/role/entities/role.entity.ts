import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  Designation: String;
}

