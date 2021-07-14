import {MigrationInterface, QueryRunner} from "typeorm";

export class userNamePropertyEnUserEntity1626280771927 implements MigrationInterface {
    name = 'userNamePropertyEnUserEntity1626280771927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "userName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userName"`);
    }

}
