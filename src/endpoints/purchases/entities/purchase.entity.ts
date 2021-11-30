import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    purchaseId : number;
    @Column()
    productId : number;
    @Column()
    quantity : number;
    @Column()
    transactionId : number;
}
