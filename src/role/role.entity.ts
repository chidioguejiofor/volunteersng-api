import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoleType = 'owner' | 'manager' | 'super admin' | 'admin' | 'volunteer'

@Entity({name: 'Role'})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: ['owner', 'manager', 'super admin', 'admin', 'volunteer'],
    default: "volunteer"
})
  name: UserRoleType;

  @Column()
  description: string;
}