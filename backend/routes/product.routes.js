import { Router } from "express";
import { Product } from "../models/ProductSchema.js";
import multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the blog-assets directory if it doesn't exist
const productAssetsDirectory = path.join(__dirname, "./product-assets");
if (!fs.existsSync(productAssetsDirectory)) {
  fs.mkdirSync(productAssetsDirectory);
}

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, productAssetsDirectory);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const productRouter = Router();

// Serve static files from the "product-assets" directory within the productRouter
productRouter.use("/product-assets", express.static(productAssetsDirectory));

productRouter.post(
  "/add-product",
  upload.single("Product_image"),
  async (req, res) => {
    const {
      Product_name,
      category,
      description,
      selling_price,
      stock,
      units,
      status,
    } = req.body;
    const Product_image = req.file;
    try {
      const imageUrl = Product_image
        ? `http://localhost:4000/api/product/product-assets/${Product_image.filename}`
        : "https://picsum.photos/800/400";

      const newProduct = new Product({
        Product_name,
        category,
        Product_image: imageUrl,
        description,
        selling_price,
        stock,
        units,
        status,
      });

      const savedProduct = await newProduct.save();
      return res
        .status(201)
        .json({ message: "Product added successfully", product: savedProduct });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: "Error while adding product", error });
    }
  }
);

productRouter.put(
  "/edit-product/:id",
  upload.single("Product_image"),
  async (req, res) => {
    const { id } = req.params;
    const {
      Product_name,
      category,
      description,
      selling_price,
      stock,
      units,
      status,
    } = req.body;
    const Product_image = req.file;

    try {
      // Find the existing product by ID
      const existingProduct = await Product.findById(id).select(
        "Product_image"
      );

      if (!existingProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Determine the path for the thumbnail image
      const Product_imagePath =  Product_image
      ? `http://localhost:4000/api/product/product-assets/${Product_image.filename}`
      : "https://picsum.photos/800/400";

      // Prepare the updated data
      const updatedData = {
        Product_name,
        category,
        description,
        selling_price,
        stock,
        units,
        status,
        Product_image: Product_imagePath,
      };

      // Update the post in the database
      const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true,
      });

      // If a new thumbnail image was uploaded, remove the old one
      if (Product_image && existingProduct.Product_image) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          existingProduct.Product_image
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      return res
        .status(200)
        .json({ message: "Product updated successfully", post: updatedProduct });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: "Error while updating post", error });
    }
  }
);

productRouter.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the existing product by ID
    const existingProduct = await Product.findById(id).select("Product_image");

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product from the database
    await Product.findByIdAndDelete(id);

    // Remove the thumbnail image from the server
    const oldImagePath = path.join(
      __dirname,
      "..",
      existingProduct.Product_image
    );
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error while deleting Product", error });
  }
});

productRouter.get("/get-product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).json({ message: "product fetched successfully", product });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error while fetching product", error });
  }
});

productRouter.get("/get-all-products", async (req, res) => {
  try {
    // Find all products
    const products = await Product.find();

    return res
      .status(200)
      .json({ message: "products fetched successfully", products });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error while fetching products", error });
  }
});

export { productRouter };
