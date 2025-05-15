import {BelongsTo, DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Post } from './Posts.js'; // Importar el modelo de Posts para establecer la relación

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING(320),
        allowNull: true,
        defaultValue: '../imgs/pfp/defaultpfp.jpg'
    }
 });


User.hasMany(Post, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});
