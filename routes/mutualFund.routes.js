const express = require("express");
const router = express.Router();
const { getAllFunds, createFund } = require("../controllers/mutualFund.controller");

router.get("/", getAllFunds);
router.post("/", createFund);

module.exports = router;
