import { from } from "rxjs";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    name: string;
    @Column({ nullable: true })
    email: string;
}