import { DataSource } from "typeorm"
import { AppDataSource } from "./data-source.js"

AppDataSource.initialize()
.then((datasource: DataSource) => {
  console.log('Syncrhonizing database');
  // datasource.synchronize();
  datasource.runMigrations();
})
.catch(error => console.log(error))
