import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

  const titleHandler = (e) => {
    settitle(e.target.value);
  };
  const PriceHandler = (e) => {
    setprice(e.target.value);
  };
  const dateHandler = (e) => {
    setdate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: price,
      date: new Date(date),
    };
    props.addExpense(expenseData);
    settitle("");
    setprice("");
    setdate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expenseForm_controls">
        <div className="expenseForm_control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="expenseForm_control">
          <label>Price</label>
          <input
            type="number"
            value={price}
            min="0.01"
            step="0.01"
            onChange={PriceHandler}
          />
        </div>
        <div className="expenseForm_control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-30"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="expenseForm_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
