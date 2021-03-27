const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
        unique: true,
      },
      label: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Currency,
        required: true,
        min: 0,
      },
      featured: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
        required: true,
      },

  },
  {
    timestamps: true,
  }
);

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;