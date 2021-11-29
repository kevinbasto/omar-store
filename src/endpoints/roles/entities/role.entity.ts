import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn('identity')
    roleId : number;
    @Column({length: 99})
    name : string;
    @Column('int')
    authority : number;
}
