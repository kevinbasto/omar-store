import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryColumn()
    email : string;
    @Column()
    password : string;
    @Column()
    userId : number;
}
