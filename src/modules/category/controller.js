const { CategoryService } = require('../services')

const CategoryController = {}

CategoryController.enabledCategory = async (req, res) => {
  req.logger.debug('Getting enabled categories')
  return CategoryService.findEnabled()
}

module.exports = CategoryController
