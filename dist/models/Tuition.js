"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const car_1 = require("./car");
class Tuition extends sequelize_1.Model {
}
exports.Tuition = Tuition;
Tuition.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    car_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: car_1.Car,
            key: 'id',
        },
    },
    plate_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    registration_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    expiration_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("ACTIVE", "EXPIRED"),
        allowNull: false,
        defaultValue: "ACTIVE",
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Tuition",
    tableName: "tuitions",
    timestamps: false,
});
Tuition.belongsTo(car_1.Car, {
    foreignKey: "car_id",
    targetKey: "id",
});
