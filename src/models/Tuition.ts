import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { Car } from "./car";

export interface TuitionI {
  id?: number;
  car_id: number;
  plate_number: string;
  registration_date: Date;
  expiration_date: Date;
  status: "ACTIVE" | "EXPIRED";
}

export class Tuition extends Model<TuitionI> {
  public id!: number;
  public car_id!: number;
  public plate_number!: string;
  public registration_date!: Date;
  public expiration_date!: Date;
  public status!: "ACTIVE" | "EXPIRED";
}

Tuition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Car,
        key: 'id',
      },
    },
    plate_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "EXPIRED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "Tuition",
    tableName: "tuitions",
    timestamps: false,
  }
);

Tuition.belongsTo(Car, {
  foreignKey: "car_id",
  targetKey: "id",
});