const express = require("express");
const router = express.Router();
const { getAllFunds, createFund, getOneFund, deleteFund } = require("../controllers/mutualFund.controller");

router.get("/", getAllFunds);
router.post("/", createFund);
router.put("/", getOneFund);
router.delete("/", deleteFund);

module.exports = router;
