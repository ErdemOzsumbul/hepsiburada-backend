const mongoose = require("mongoose");
const productSchema = require("../schema/product");
const picture = require("./picture");
const products = require("./products");

const Controller = app => {
  app.get("/api/products", products);
  app.post("/api/addProduct", (req, res) => {
    const { name, price, rating, reviews, src } = req.body;
    try {
      const product = new productSchema({
        name,
        price,
        rating,
        reviews,
        src,
      });
      product.save();
    } catch (e) {
      console.error("error", e);
    }
  });
  app.get("/api/picture", picture);
  app.get("/api/product/details", async (req, res) => {
    const { id } = req.query;
    if (!id) {
      res.status(400).send("Bad Request");
    }
    console.log(id);
    try {
      const data = await productSchema.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      console.log(data);
      res.send(data).status(200);
    } catch (error) {
      console.error(error);
      res.status(400).send("Bad Request");
    }
  });
};

module.exports = Controller;
