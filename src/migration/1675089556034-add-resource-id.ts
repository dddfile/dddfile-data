import { MigrationInterface, QueryRunner } from "typeorm";

export class addResourceId1675089556034 implements MigrationInterface {
    name = 'addResourceId1675089556034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" ADD "resource_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" DROP COLUMN "resource_id"`);
    }

}
