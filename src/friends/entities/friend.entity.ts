import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FriendEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}

