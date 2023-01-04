import React, { createContext, useContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";
import { createCashbookIdentifier } from "../utils";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item =
        typeof window !== "undefined" && window.localStorage.getItem(key);

      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

export const ExpensesContext = createContext();

export const useExpenses = () => useContext(ExpensesContext);

export const initialState = {
  transactions: [],
};

export const ExpensesProvider = ({ children, storage = useLocalStorage }) => {
  const id = createCashbookIdentifier();

  const [savedExpenses, saveExpenses] = storage(
    "locale",
    JSON.stringify({
      id,
      ...initialState,
    })
  );

  const [state, dispatch] = useReducer(AppReducer, JSON.parse(savedExpenses));

  useEffect(() => {
    saveExpenses(JSON.stringify(state));
  }, [state, saveExpenses]);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    toast.error("Transaction Successfully removed!");
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

    toast.success("Transaction Successfully added!");
  }

  return (
    <ExpensesContext.Provider
      value={{
        ...state,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
