const prisma = require("../prisma/db");

exports.getAllFundHoldings = async (req, res) => {
    try {
        const fundHoldings = await prisma.fundHolding.findMany();
        res.json(fundHoldings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFundHolding = async (req, res) => {
    try {
        const fundHolding = await prisma.fundHolding.create({ data: req.body });
        res.status(201).json(fundHolding);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOneFundHolding = async (req, res) => {
    try {
        const fundHolding = await prisma.fundHolding.findUnique({
            where: { fundHolding_id: req.params.id }
        });
        if (!fundHolding) {
            res.status(404).json({ error: "FundHolding not found" });
        } else {
            res.json(fundHolding);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFundHolding = async (req, res) => {
    try {
        const fundHolding = await prisma.fundHolding.delete({
            where: { fundHolding_id: req.params.id }
        });
        if (!fundHolding) {
            res.status(404).json({ error: "FundHolding not found" });
        } else {
            res.json({ message: "FundHolding deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};  