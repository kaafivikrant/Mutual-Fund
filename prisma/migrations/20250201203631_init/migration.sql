-- CreateTable
CREATE TABLE "MutualFund" (
    "fund_id" SERIAL NOT NULL,
    "fund_name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fund_manager" TEXT NOT NULL,
    "expense_ratio" DOUBLE PRECISION NOT NULL,
    "aum" DOUBLE PRECISION NOT NULL,
    "nav" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MutualFund_pkey" PRIMARY KEY ("fund_id")
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "market_cap" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "FundHolding" (
    "holding_id" SERIAL NOT NULL,
    "fund_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    "aum_percentage" DOUBLE PRECISION NOT NULL,
    "num_of_shares" INTEGER NOT NULL,
    "report_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FundHolding_pkey" PRIMARY KEY ("holding_id")
);

-- AddForeignKey
ALTER TABLE "FundHolding" ADD CONSTRAINT "FundHolding_fund_id_fkey" FOREIGN KEY ("fund_id") REFERENCES "MutualFund"("fund_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundHolding" ADD CONSTRAINT "FundHolding_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;
