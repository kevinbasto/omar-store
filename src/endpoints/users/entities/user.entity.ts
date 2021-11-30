import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId : number;
    @Column()
    roleId : number;
    @Column()
    name : string;
}
