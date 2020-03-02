const mongoose = require('mongoose')

var Schema = mongoose.Schema

var CategorySchema = new Schema(
  {
    categId: { type: Number, required: true },
    categName: { type: String, required: true },
    enabled: { type: Boolean, required: true }
  }, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    strict: false
  }
)

CategorySchema.index({ enabled: 1, categId: 1 })

CategorySchema.index({ enabled: 1, categName: 1 })

const CategoryModel = mongoose.model('Category', CategorySchema, 'category')

module.exports = { CategoryModel }
