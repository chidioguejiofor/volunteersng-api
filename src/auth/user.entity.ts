import { BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique } from "typeorm";


@Entity({name: 'User'})
//@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({default: false})
    verified: boolean
}