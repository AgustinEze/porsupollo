import sequelize, { DataTypes } from 'sequelize'

export const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('OWNER', 'ADMIN', 'SELLER'),
        allowNull: false
    }
});