require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const recipeSchema = new mongoose.Schema(
  {
    name: {type: String},
    description: {type: String, default: null},
    ingredients: {type: [String]},
    steps: {type: [String]},
    favorites: {type: Boolean, default: false},
    views: {type: Number, default: 0},
    image_id: {type: String, default: null}
  },
  { timestamps: true } // will automatically create and set `createdAt` and `updatedAt` timestamps
);

const Recipe = new mongoose.model(`${process.env.DB_NAME}`, recipeSchema); //  TODO: Fill in arguments!

module.exports = Recipe;
