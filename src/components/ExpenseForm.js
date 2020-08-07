import React from 'react'

const ExpenseForm = () => {
    return (
        <div className="box">
            <div className="field">
                <label className="label">Name Expense</label>
                <div className="control">
                    <input className="input" type="text" placeholder="buy food" />
                </div>
            </div>

            <div className="field">
                <label className="label">Total Expense (+ income, - outcome)</label>
                <div className="control">
                    <input className="input" type="number" placeholder="100" />
                </div>
            </div>

            <button className="button is-primary is-fullwidth mt-5">Add Transaction</button>
        </div>
    )
}

export default ExpenseForm
