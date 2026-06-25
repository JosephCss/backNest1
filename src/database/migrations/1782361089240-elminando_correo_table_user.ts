import { MigrationInterface, QueryRunner } from "typeorm";

export class ElminandoCorreoTableUser1782361089240 implements MigrationInterface {
    name = 'ElminandoCorreoTableUser1782361089240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
