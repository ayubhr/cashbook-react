import React from "react";
import { useExpenses } from "../context/GlobalState";
import { moneyFormatter } from "../utils";

export const Balance = () => {
  const { transactions } = useExpenses();

  const total = transactions?.reduce((acc, item) => (acc += item.amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="text-amber">{moneyFormatter(total)}</h1>
    </>
  );
};
