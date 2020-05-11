import {MigrationInterface, QueryRunner} from "typeorm";

export class all1587555334568 implements MigrationInterface {
    name = 'all1587555334568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "verified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Membership" ("id" SERIAL NOT NULL, "userId" uuid NOT NULL, "orgId" uuid NOT NULL, "roleId" uuid NOT NULL, CONSTRAINT "PK_db6fe01b9c1f9f7b244a12b5092" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Organization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "logoURL" character varying NOT NULL, "foundIn" TIMESTAMP NOT NULL, "industry" character varying NOT NULL, "description" character varying NOT NULL, "contactPhone" character varying NOT NULL, CONSTRAINT "PK_67bcafc78935cd441a054c6d4ea" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TYPE "Role_name_enum" AS ENUM('owner', 'manager', 'super admin', 'admin', 'volunteer')`, undefined);
        await queryRunner.query(`CREATE TABLE "Role" ("id" SERIAL NOT NULL, "name" "Role_name_enum" NOT NULL DEFAULT 'volunteer', "description" character varying NOT NULL, CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Role"`, undefined);
        await queryRunner.query(`DROP TYPE "Role_name_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "Organization"`, undefined);
        await queryRunner.query(`DROP TABLE "Membership"`, undefined);
        await queryRunner.query(`DROP TABLE "User"`, undefined);
    }

}
