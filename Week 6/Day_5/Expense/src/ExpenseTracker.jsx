
import React, { useState } from 'react'

const ExpenseTracker = () => {
  const[input, setInput] = useState("");
  const[amount, setAmount] = useState("");
  const[expenses, setExpenses] = useState([]); 

  const addExpense = () => {
    if(!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1, // unique id for each expense (one more way)
      // id: Date.now(),   // unique id for each expense
      title:input,
      // name: input,
      amount: amount
    };
    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  }
  
  const deleteExpense = (id) => {
    setExpenses(expenses.filter ((expense) => expense.id !== id));

  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type="text" 
        placeholder="Expense" 
        value={input}
        onChange={(e) => setInput(e.target.value)} />
        <input type="number" 
        placeholder="Amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)} />
        
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'>
        {
          expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
              <button onClick={ () => deleteExpense(expense.id)}>Delete</button>
            </li>           
          ))
        }
                
      </ul>
    </div>
  )
}

export default ExpenseTracker;