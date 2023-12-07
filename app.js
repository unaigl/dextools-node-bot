const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { Router } = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

/* ROUTER */
const router = Router();

router.get("/getPricesCronToEmail", async (req, res) => {
  try {
    // Assuming Countries is a model or object that you've defined elsewhere
    const data = await Countries.find();
    console.log("data", data);
    if (!data) res.status(302).json("no data");
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getPricesManual", async (req, res) => {
  try {
    // Assuming Products is a model or object that you've defined elsewhere
    const data = await Products.find();
    console.log(data);
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(router);

module.exports = app;
