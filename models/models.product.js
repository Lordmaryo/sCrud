import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);

export default Products;
