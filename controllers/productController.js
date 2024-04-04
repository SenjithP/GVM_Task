const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  try {
    const { vendorName, productName, ProductType, productPrice } = req.body;
    if (vendorName.length === 0) {
      return res.status(401).json({ error: "vendorName cannot be empty" });
    }
    if (productName.length === 0) {
      return res.status(401).json({ error: "productName cannot be empty" });
    }
    if (ProductType.length === 0) {
      return res.status(401).json({ error: "ProductType cannot be empty" });
    }
    if (!productPrice) {
      return res.status(401).json({ error: "productPrice cannot be empty" });
    }
    const product = new Product({
      vendorName: vendorName,
      productName: productName,
      ProductType: ProductType,
      productPrice: productPrice,
    });
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const { vendorName, productName, ProductType, productPrice } = req.body;
    const editingProduct = await Product.findById({ _id: id });
    if (!editingProduct) {
      return res.status(401).json({ error: "No products found" });
    }
    if (editingProduct.vendorName === vendorName) {
      editingProduct.productName = productName || editingProduct.productName;
      editingProduct.ProductType = ProductType || editingProduct.ProductType;
      editingProduct.productPrice = productPrice || editingProduct.productPrice;
      await editingProduct.save();
      res.status(201).json({ message: "Product Edited successfully" });
    } else {
      return res
        .status(401)
        .json({ error: "You have no access to Edit the product details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const isDeleted = await Product.deleteOne({ _id: id });
    if (isDeleted) {
      res.status(200).json({ message: "Product Deleted successfully" });
    } else {
      return res
        .status(401)
        .json({ error: "Edit didnot happened. Please try after some time" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchProduct = async (req, res) => {
  try {
    const searchingProduct = await Product.find(req.query);
    res.status(200).json({ status: true, data: { searchingProduct } });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
