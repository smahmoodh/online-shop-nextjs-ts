import mongoose, { Document, Model, model, models, Schema } from "mongoose";

interface CategoryProps extends Document {
  name: string;
  enName: string;
  path: string;
  parent: Schema.Types.ObjectId | CategoryProps;
  properties: object[];
}

const CategorySchema: Schema<CategoryProps> = new Schema({
  name: { type: String, required: true },
  enName: { type: String, required: true },
  path: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: "Category" },
  properties: [{ type: Object }],
});

export const Category: Model<CategoryProps> = models.Category || model < CategoryProps > ("Category", CategorySchema);

// import mongoose, { model, models, Schema } from "mongoose";

// const CategorySchema = new Schema({
//   name: { type: String, required: true },
//   enName: { type: String, required: true },
//   path: { type: String, required: true },
//   parent: { type: mongoose.Types.ObjectId, ref: "Category" },
//   properties: [{ type: Object }],
// });

// export const Category = models.Category || model("Category", CategorySchema);
