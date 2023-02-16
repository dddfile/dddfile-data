import "reflect-metadata"
import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"
import { CrawlAsset } from "./entity/CrawlAsset.js"
import { CrawlSite } from "./entity/CrawlSite.js"

import * as dotenv from "dotenv";

let path = ".env." + (process.env.NODE_ENV || "local");
dotenv.config({ path });

const options: any = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT || 5433),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [CrawlAsset, CrawlSite],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy()
};

if (process.env.DATABASE_CA_CERT) {
    options.ssl = {
        ca: process.env.DATABASE_CA_CERT
    }
}

export const AppDataSource = new DataSource(options)
