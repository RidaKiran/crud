import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column()
    age: Number;




    
}
