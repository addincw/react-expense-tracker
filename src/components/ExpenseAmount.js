import React, { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const ExpenseAmount = () => {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map((trasanction) => trasanction.amount);
  const income = amounts.reduce((result, amount) => {
    return result + (amount > 0 ? amount : 0);
  }, 0);
  const outcome = amounts.reduce((result, amount) => {
    return result + (amount < 0 ? amount : 0);
  }, 0);

  return (
    <div className="box mb-5">
      <nav className="level is-mobile">
        <div
          className="level-item"
          style={{ borderRight: "1px solid #efefef" }}
        >
          <div>
            <p className="heading">Income</p>
            <p className="title has-text-success">{income}</p>
          </div>
        </div>
        <div className="level-item">
          <div>
            <p className="heading">Outcome</p>
            <p className="title has-text-danger">{outcome}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ExpenseAmount;
