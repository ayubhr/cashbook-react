import React from "react";
import { useExpenses } from "../context/GlobalState";
import { Badge } from "@tremor/react";
import { moneyFormatter } from "../utils";

export const IncomeExpenses = () => {
  const { transactions } = useExpenses();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <Badge
          text={moneyFormatter(income)}
          color="green"
          size="sm"
          icon={undefined}
          tooltip=""
          marginTop="mt-0"
        />{" "}
      </div>
      <div>
        <h4>Expense</h4>
        <Badge
          text={moneyFormatter(expense)}
          color="red"
          size="sm"
          icon={undefined}
          tooltip=""
          marginTop="mt-0"
        />{" "}
      </div>
    </div>
  );
};
