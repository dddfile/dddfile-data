import { MigrationInterface, QueryRunner } from "typeorm"

export class ftsTrigger1675023864548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('Creating trigger');
        await queryRunner.query(
          `CREATE OR REPLACE FUNCTION process_insert_crawl_asset()
          RETURNS TRIGGER AS $tr_insert_crawl_asset$
          BEGIN
            new.document_vectors = (to_tsvector(new.title) || to_tsvector(new.tags));
            RETURN new;
          END;
          $tr_insert_crawl_asset$ LANGUAGE plpgsql;`,
        );
    
        await queryRunner.query(
          `CREATE TRIGGER tr_insert_crawl_asset
          BEFORE INSERT OR UPDATE ON crawl_asset
          FOR EACH ROW EXECUTE PROCEDURE process_insert_crawl_asset();`,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TRIGGER tr_insert_crawl_asset ON project`);
        await queryRunner.query(`DROP FUNCTION process_insert_crawl_asset();`);
      }
}
