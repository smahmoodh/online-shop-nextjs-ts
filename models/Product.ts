import mongoose, { Document, Model, model, models, Schema, Types } from "mongoose";

interface IProduct extends Document {
  title: string;
  description?: string;
  price: number;
  hasDiscount: boolean;
  discountPrice?: number;
  images: string[];
  category: Schema.Types.ObjectId;
  properties?: object;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    hasDiscount: { type: Boolean, default: false },
    discountPrice: { type: Number },
    images: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  },
);

export const Product: Model<IProduct> = models.Product || model < IProduct > ("Product", ProductSchema);
// import mongoose, { model, models, Schema } from "mongoose";

// const ProductSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: String,
//     price: { type: Number, required: true },
//     hasDiscount: { type: Boolean, default: false },
//     discountPrice: { type: Number },
//     images: [{ type: String }],
//     category: { type: mongoose.Types.ObjectId, ref: "Category" },
//     properties: { type: Object },
//   },
//   {
//     timestamps: true,
//   },
// );

// export const Product = models.Product || model("Product", ProductSchema);