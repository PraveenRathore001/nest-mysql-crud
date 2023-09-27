import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto'

@Entity()
export class user{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    username:string;


    @Column()
    password:string; 

    @BeforeInsert()
    hashPassword() {
      this.password = crypto.createHmac('sha256', this.password).digest('hex');}
    
    @Column()
    createdat:Date;

    @Column({nullable:true})
    authstrategy:string
}