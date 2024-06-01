import sequelize, { DataTypes } from "sequelize";

export const Product = sequelize.define('product', {
    product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('WEIGHABLE', 'UNIT'),
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('STORE', 'FARM', 'DRINKS'),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[0-9]+$/ }
    },
    stock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: { min: 0.01 }
    }
});