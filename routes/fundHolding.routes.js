const express = require("express");
const router = express.Router();
const { getAllFundHoldings, createFundHolding, getOneFundHolding, deleteFundHolding } = require("../controllers/fundHolding.routes.js");

router.get("/", getAllFundHoldings);
router.post("/", createFundHolding);
router.put("/", getOneFundHolding);
router.delete("/", deleteFundHolding);

module.exports = router;
