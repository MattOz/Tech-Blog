const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
