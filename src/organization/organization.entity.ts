import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Organization'})
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  logoURL: string;

  @Column()
  foundIn: Date;

  @Column()
  industry: string;

  @Column()
  description: string

  @Column()
  contactPhone: string
}