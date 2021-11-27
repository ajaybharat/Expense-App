import ExpenseForm from "./expenseForm";
import React from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  function onSubmitExpenseHandler(data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  }
  return (
    <div className="expense-form">
      <ExpenseForm addExpense={onSubmitExpenseHandler} />
    </div>
  );
};

export default NewExpense;
