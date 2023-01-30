import { CrawlAsset } from "../entity/CrawlAsset.js";
import { AppDataSource } from "../data-source.js";
import { FindManyOptions, Repository } from "typeorm";

class CrawlAssetRepository {
  private repo: Repository<CrawlAsset>;

  constructor() {
    this.repo = AppDataSource.getRepository(CrawlAsset);
  }

  async exists(assetId: string): Promise<boolean> {
    return await this.repo.exist({
      where: {
        assetId
      }
    });
  }

  async get(assetId: string): Promise<CrawlAsset | null> {
    return await this.repo.findOneBy({
      assetId
    });
  }

  /** Insert entity */
  async insert(asset: CrawlAsset): Promise<void> {
    try {
      const result = await this.repo.insert(asset);
    } catch (e) {
      console.error('Error saving asset', e);
      throw e;
    }
  }
}

export default new CrawlAssetRepository();