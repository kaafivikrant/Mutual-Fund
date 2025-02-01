const express = require("express");
const router = express.Router();
const { getAllCompanies, createCompany, getOneCompany, deleteCompany } = require("../controllers/company.controller");

router.get("/", getAllCompanies);
router.post("/", createCompany);
router.put("/", getOneCompany);
router.delete("/", deleteCompany);

module.exports = router;
