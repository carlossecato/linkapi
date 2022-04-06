import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    user: string;
    
    @Column()
    status: string;
    
    @Column()
    type: string;
    
    @Column()
    value: string;
    
    @Column()
    interval: string;
    
    @Column()
    fixed: string;

}
