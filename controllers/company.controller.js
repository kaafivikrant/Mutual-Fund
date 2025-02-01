const prisma = require("../prisma/db");

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await prisma.company.findMany();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCompany = async (req, res) => {
    try {
        const company = await prisma.company.create({ data: req.body });
        res.status(201).json(company);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOneCompany = async (req, res) => {
    try {
        const company = await prisma.company.findUnique({
            where: { company_id: req.params.id }
        });
        if (!company) {
            res.status(404).json({ error: "Company not found" });
        } else {
            res.json(company);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCompany = async (req, res) => {
    try {
        const company = await prisma.company.delete({
            where: { company_id: req.params.id }
        });
        if (!company) {
            res.status(404).json({ error: "Company not found" });
        } else {
            res.json({ message: "Company deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};