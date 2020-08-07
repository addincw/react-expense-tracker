import React, { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const ExpenseBalance = () => {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map((trasanction) => trasanction.amount);
  const balance = amounts.reduce((result, amount) => {
    return result + amount;
  }, 0);

  return (
    <div className="mb-5">
      <p className="heading">Your Balance</p>
      <p className="title">{balance}</p>
    </div>
  );
};

export default ExpenseBalance;
