import React, { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

import ExpenseItem from "./ExpenseItem";

const ExpenseHistory = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div className="panel" style={{ backgroundColor: "white" }}>
      {transactions.map((transaction) => (
        <ExpenseItem
          key={transaction.id}
          transaction={transaction}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default ExpenseHistory;
