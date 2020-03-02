const { CategoryModel } = require('./model')
const CategoryService = {}

CategoryService.findEnabled = async () => {
  return CategoryModel
    .aggregate()
    .match({ enabled: true })
    .sort({ categId: 1 })
}

module.exports = CategoryService
