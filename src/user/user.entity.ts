import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'User'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  verified: boolean;
}