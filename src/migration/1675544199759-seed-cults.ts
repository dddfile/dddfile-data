import { MigrationInterface, QueryRunner } from "typeorm"

export class seedCults1675544199759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO crawl_site (name, created_on)
            VALUES ('cults', now());
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
