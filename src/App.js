import React from "react";
import { Toaster } from "react-hot-toast";

/*** Import component ***/
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

/*** Context Provider ***/
import { ExpensesProvider } from "./context/GlobalState";

/*** import css ***/
import "./App.css";
import "@tremor/react/dist/esm/tremor.css";

function App() {
  return (
    <ExpensesProvider>
      <Header />
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />

        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpensesProvider>
  );
}

export default App;
