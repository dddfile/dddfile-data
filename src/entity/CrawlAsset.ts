import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn,Relation } from "typeorm"
import { CrawlSite } from "./CrawlSite.js";

@Entity()
export class CrawlAsset {
    @PrimaryGeneratedColumn("identity")
    id?: number;

    @Column()
    assetId: string = '';

    @Column()
    siteId: number = 0;

    @Column()
    title: string = '';

    @Column()
    url: string = '';

    @Column()
    previewUrl: string = '';

    @Column()
    tags: string = '';

    @Column()
    assetCreatedOn: Date = new Date();

    @Column()
    createdOn: Date = new Date();

    @Column("tsvector", { nullable: true })
    @Index("idx_fts_doc_vec")
    private document_vectors?: Object;

    @ManyToOne(() => CrawlSite, (site) => site.assets)
    @JoinColumn({ foreignKeyConstraintName: 'FK_CrawlAsset_CrawlSite' })
    Site!: Relation<CrawlSite>;
}