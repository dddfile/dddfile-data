import { Repository } from "typeorm";
import { AppDataSource } from "../data-source.js";
import { CrawlSite } from "../entity/CrawlSite.js";

class CrawlSiteRepository {
  private repo: Repository<CrawlSite>;

  constructor() {
    this.repo = AppDataSource.getRepository(CrawlSite);
  }
  
  async get(name: string): Promise<CrawlSite | null> {
    return await this.repo.findOneBy({
      name
    });
  }
}

export default new CrawlSiteRepository();