import React, { useState, useRef } from "react";
import { useExpenses } from "../context/GlobalState";
import { ColGrid, Col, Toggle, ToggleItem } from "@tremor/react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(1);

  const { addTransaction } = useExpenses();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type == -1 ? -parseInt(amount) : parseInt(amount),
    };

    addTransaction(newTransaction);
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description :</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount :</label>

          <ColGrid
            numCols={1}
            numColsSm={2}
            numColsLg={3}
            gapX="gap-x-2"
            gapY="gap-y-2"
          >
            <Col numColSpan={1} numColSpanLg={2}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
              />
            </Col>
            <Col>
              <Toggle
                color={`${type == 1 ? "green" : "red"}`}
                defaultValue={1}
                handleSelect={(value) => setType(value)}
              >
                <ToggleItem value={1} text="IN (+)" />
                <ToggleItem value={-1} text="OUT (-)" />
              </Toggle>
            </Col>
          </ColGrid>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
