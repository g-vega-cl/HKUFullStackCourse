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
      designation: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        required: true,
      },
      abbr: {
        type: String,
        required: true,
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

var Leaders = mongoose.model('Leader', promotionSchema);

module.exports = Leaders;