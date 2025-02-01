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
