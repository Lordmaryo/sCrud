import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.router.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server router
app.use("/api/products", router);

mongoose
  .connect("mongodb://127.0.0.1:27017/simpleCrud")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

app.listen(8080, () => console.log("Server is listening on port 8080"));
