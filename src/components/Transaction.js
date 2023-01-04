import React from "react";
import { useExpenses } from "../context/GlobalState";
import { moneyFormatter } from "../utils";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useExpenses();

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{moneyFormatter(transaction.amount)}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
