import { Sequelize } from "sequelize";

export default new Sequelize({
  host: process.env.DATABASE_HOST ?? "",
  database: process.env.DATABASE_NAME ?? "",
  username: process.env.DATABASE_USERNAME ?? "",
  password: process.env.DATABASE_PASSWORD ?? "",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});
