import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from "typeorm"
import { CrawlAsset } from "./CrawlAsset.js";

@Entity()
export class CrawlSite {

    @PrimaryGeneratedColumn("identity")
    id: number = 0;

    @Column()
    name: string = '';

    @Column()
    createdOn: Date = new Date();

    @OneToMany(() => CrawlAsset, (asset) => asset.Site)
    assets!: Relation<CrawlAsset>[];
}