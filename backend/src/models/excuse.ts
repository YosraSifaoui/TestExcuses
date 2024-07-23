import { Model, Sequelize, DataTypes } from "sequelize";

export default class Excuse extends Model {
  public id?: number;
  public http_code!: number;
  public tag!: string;
  public message!: string;
}

export const ExcuseMap = (sequelize: Sequelize) => {
  Excuse.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      http_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "excuses",
      timestamps: false,
    }
  );
  Excuse.sync();
};
