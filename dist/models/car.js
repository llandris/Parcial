"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const Tuition_1 = require("./Tuition");
class Car extends sequelize_1.Model {
}
exports.Car = Car;
Car.init({
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Brand cannot be empty" },
        },
    },
    class: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Class cannot be empty" },
        },
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "Model cannot be empty" },
        },
    },
    cylinderCapacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "Cylinder capacity must be integer" },
            min: 1,
        },
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "Capacity must be integer" },
            min: 1,
        },
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("ACTIVE", "INACTIVE"),
        defaultValue: "ACTIVE",
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Car",
    tableName: "cars",
    timestamps: false,
});
Car.hasMany(Tuition_1.Tuition, {
    foreignKey: "car_id",
    sourceKey: "id",
});
Tuition_1.Tuition.belongsTo(Car, {
    foreignKey: "car_id",
    targetKey: "id",
});
