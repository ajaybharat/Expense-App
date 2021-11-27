import React, { useState } from "react";
import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseItems, setexpenseItems] = useState(expenses);

  const addExpenseHandler = (data) => {
    const expenses = [...expenseItems];
    expenses.push(data);
    setexpenseItems(expenses);
    console.log(`from app ${JSON.stringify(expenses)}`);
  };
  return (
    <div className="app">
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
