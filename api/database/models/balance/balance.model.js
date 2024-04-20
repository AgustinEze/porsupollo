import sequelize, { DataTypes } from "sequelize";

export const Balance = sequelize.define('balance', {
    balance_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 31 }
    },
    day_of_week: {
        type: DataTypes.ENUM('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'),
        allowNull: false
    },
    month: {
        type: DataTypes.ENUM('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'),
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    total_sales: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    day_profit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    day_sales: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});