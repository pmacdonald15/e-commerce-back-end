// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// products belongsTo category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// categories have many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// products belongToMany tags (through producttag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// tags belongToMany products (through producttag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};