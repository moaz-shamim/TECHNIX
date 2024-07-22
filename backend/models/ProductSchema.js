import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    Product_name: {
      type: String,
      required: true,
    },
    Product_image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    selling_price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    units: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
