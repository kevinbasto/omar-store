import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transactionId : number;
    @Column()
    subtotal : number;
    @Column()
    tax : number;
    @Column()
    userId : number;
}
