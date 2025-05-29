import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const PostLikes = sequelize.define('postlikes', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});