import { MigrationInterface, QueryRunner } from "typeorm"

export class seedThingiverse1675036054300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO crawl_site (name, created_on)
            VALUES ('thingiverse', now());
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
