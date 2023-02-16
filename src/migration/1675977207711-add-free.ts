import { MigrationInterface, QueryRunner } from "typeorm";

export class addFree1675977207711 implements MigrationInterface {
    name = 'addFree1675977207711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" ADD "free" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawl_asset" DROP COLUMN "free"`);
    }

}
