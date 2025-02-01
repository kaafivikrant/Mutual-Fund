const express = require("express");
const cors = require("cors");
const prisma = require("./prisma/db");

const mutualFundRoutes = require("./routes/mutualFund.routes.js");
const companyRoutes = require("./routes/company.routes.js");
const fundHolding = require("./routes/fundHolding.routes.js");

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());

app.use("/api/mutual-funds", mutualFundRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/fund-holding", fundHolding);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
