import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Membership'})
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid')
  userId: string;

  @Column('uuid')
  orgId: string

  @Column('uuid')
  roleId: string
}