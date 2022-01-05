import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    function startEditingHandler () {
        setIsEditing(true);
    }

    function cancelEditingHandler () {
        setIsEditing(false)
    }


    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancel={cancelEditingHandler} />}
        </div>
    )
}

export default NewExpense;