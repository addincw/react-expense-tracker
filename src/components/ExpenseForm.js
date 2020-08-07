import React, { useState, useContext } from "react";
import { ADD_TRANSACTION } from "../store/ActionTypes";
import { ExpenseContext } from "../store/ExpenseContext";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [expense, setExpense] = useState(0);

  const { dispatch } = useContext(ExpenseContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setName("");
    setExpense(0);

    dispatch({
      type: ADD_TRANSACTION,
      payload: { text: name, amount: Number(expense) },
    });
  };

  return (
    <div className="box">
      <div className="field">
        <label className="label">Name Expense</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="ex: buy food"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Total Expense (+ income, - outcome)</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="ex: 100"
            onChange={(e) => setExpense(e.target.value)}
            value={expense}
          />
        </div>
      </div>

      <button
        className="button is-primary is-fullwidth mt-5"
        onClick={handleSubmitForm}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default ExpenseForm;
