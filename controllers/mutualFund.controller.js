const prisma = require("../prisma/db");

exports.getAllFunds = async (req, res) => {
    try {
        const funds = await prisma.mutualFund.findMany({
            include: { holdings: true }
        });
        res.json(funds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFund = async (req, res) => {
    try {
        const fund = await prisma.mutualFund.create({ data: req.body });
        res.status(201).json(fund);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOneFund = async (req, res) => {
    try {
        const fund = await prisma.mutualFund.findUnique({
            where: { fund_id: req.params.id },
            include: { holdings: true }
        });
        if (!fund) {
            res.status(404).json({ error: "Fund not found" });
        } else {
            res.json(fund);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFund = async (req, res) => {
    try {
        const fund = await prisma.mutualFund.delete({
            where: { fund_id: req.params.id }
        });
        if (!fund) {
            res.status(404).json({ error: "Fund not found" });
        } else {
            res.json({ message: "Fund deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

