import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    productId: number;
    @Column()
    name : string;
    @Column()
    description : string;
    @Column()
    price : number;
    @Column()
    picture : string;
}
