import {MigrationInterface, QueryRunner} from "typeorm";

export class userNamePropertyEnUserEntity11626281098213 implements MigrationInterface {
    name = 'userNamePropertyEnUserEntity11626281098213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "userName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userName"`);
    }

}
