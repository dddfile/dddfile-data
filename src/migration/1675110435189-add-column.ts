import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumn1675110435189 implements MigrationInterface {
    name = 'addColumn1675110435189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" ADD "site_preview_url" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" DROP COLUMN "site_preview_url"`);
    }

}
