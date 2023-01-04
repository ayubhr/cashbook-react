import React from "react";
import { Callout } from "@tremor/react";
import { Transaction } from "./Transaction";
import { useExpenses } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useExpenses();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <Callout
            title=""
            text="No transactions exist yet ! please add transactions"
            icon={undefined}
            color="gray"
            height=""
            marginTop="mt-0"
          />
        )}
      </ul>
    </>
  );
};
