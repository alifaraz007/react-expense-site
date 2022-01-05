import React, { useState } from 'react';

import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseBar from './ExpenseBar';
import ExpensesList from './ExpensesList';

import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(filteredExpense => new Date(filteredExpense.date).getFullYear().toString() === filteredYear)

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        <ExpenseBar expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  )
}

export default Expenses;