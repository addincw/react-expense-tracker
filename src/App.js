import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import ExpenseBalance from './components/ExpenseBalance';
import ExpenseAmount from './components/ExpenseAmount';
import ExpenseHistory from './components/ExpenseHistory';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <p className="title mb-5">Expense Tracker</p>

        <ExpenseBalance />

        <ExpenseAmount />

        <p className="has-text-weight-bold mb-3">History</p>
        <ExpenseHistory />

        <p className="has-text-weight-bold mb-3">Add New Transaction</p>
        <ExpenseForm />

      </div>
    </div>
  );
}

export default App;
