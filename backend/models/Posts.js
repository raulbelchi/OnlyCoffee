import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { PostLikes } from './PostLikes.js'; // Importar el modelo de PostLikes para establecer la relación

export const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    metodoEx: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cafetera: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cafe: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    intensidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(320),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING(320),
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
});

//Relaciones con la tabla PostLikes
Post.hasMany(PostLikes, {
    foreignKey: 'post_id',
    sourceKey: 'id'
});

PostLikes.belongsTo(Post, {
    foreignKey: 'post_id',
    targetKey: 'id'
});