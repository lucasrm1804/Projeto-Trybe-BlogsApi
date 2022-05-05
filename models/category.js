const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      through: 'PostsCategories',
      as: 'posts',
    });
  }
}

module.exports = Category; 