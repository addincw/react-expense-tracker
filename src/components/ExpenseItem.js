import React, { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import { DELETE_TRANSACTION } from "../store/ActionTypes";

const ExpenseItem = ({ transaction }) => {
  const { dispatch } = useContext(ExpenseContext);
  let icon = {
    color: "has-text-success",
    logo: "fa-long-arrow-alt-down",
  };

  if (transaction.amount < 0) {
    icon = {
      color: "has-text-danger",
      logo: "fa-long-arrow-alt-up",
    };
  }

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  return (
    <div
      className="panel-block"
      style={{ paddingTop: "15px", paddingBottom: "15px" }}
    >
      <p>
        <span className={"icon " + icon.color}>
          <i className={"fas " + icon.logo}></i>
        </span>
        <span className="has-text-weight-bold">{transaction.text + " "}</span>
        Rp{Math.abs(transaction.amount)}
      </p>
      <button
        className="delete"
        onClick={() => deleteTransaction(transaction.id)}
      ></button>
    </div>
  );
};

export default ExpenseItem;
