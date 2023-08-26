import mongoose, { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  enName: { type: String, required: true },
  path: { type: String, required: true },
  parent: { type: mongoose.Types.ObjectId, ref: "Category" },
  properties: [{ type: Object }],
});

export const Category = models.Category || model("Category", CategorySchema);
