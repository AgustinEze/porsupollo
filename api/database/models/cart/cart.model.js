import sequelize, { DataTypes } from "sequelize";

export const Cart = sequelize.define('cart', {
    cart_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: { min: 0.01 }
    },
    cart: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});