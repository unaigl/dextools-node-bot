const mongoose = require("mongoose")

const { Schema } = mongoose
mongoose.Promise = globalThis.Promise

const coinsSch = new Schema(
  {
    chain: {
      type: String,
      required: true,
      trim: true,
    },
    coingecko: {
      type: String,
      trim: true,
    },
    symbol: {
      type: String,
      trim: true,
    },
    pool: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    buyPrice_USD: {
      type: Number,
    },
    highTarget: {
      type: Number,
    },
    lowTarget: {
      type: Number,
    },
    emailSend: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports =
  mongoose.models.Coins || mongoose.model("Coins", coinsSch)
