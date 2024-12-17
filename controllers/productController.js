import Products from "../models/models.product.js";

//Get all products
export const getAllProducts = async (req, res) => {
  await Products.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json({ message: err.message }));
};

//Get product by id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send({ message: err.message });
  }
};

//Update product by id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndUpdate(id, req.body);
    if (!product)
      return res.status(404).json({ message: "Cannot find Product" });

    const updatedProduct = await Products.findById(id);
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//add product
export const addProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json(product);
    console.log(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete product by id
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
