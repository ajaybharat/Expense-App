import React from "react";
import ExpenseItem from "./expense-item";
import Card from "../UI/card";
import "./expenses.css";

const expense = (props) => {
  return (
    <div>
      <Card className="expenses">
        {props.items.map((each, idx) => (
          <ExpenseItem
            key={each.id}
            id={each.id}
            date={each.date}
            title={each.title}
            price={each.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default expense;
