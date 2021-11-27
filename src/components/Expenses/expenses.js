import React, { useState, useEffect, useCallback } from "react";
import ExpenseItem from "./expense-item";
import Card from "../UI/card";
import "./expenses.css";
import FilteredExpenses from "./FilteredExpenses";

const Expense = (props) => {
  const [filteryear, setfilteryear] = useState(2021);
  const [items, setitems] = useState(props.items);

  const filterHandler = (year) => {
    var filtereditems = props.items.filter((each) => {
      let eachyear = each.date.getFullYear();
      return eachyear === year;
    });
    setitems(filtereditems);
    setfilteryear(parseInt(year));
  };

  const filtercallbackhandler = useCallback((year) => {
    filterHandler(year);
  }, []);

  useEffect(() => {
    console.log("items updated");
    filterHandler(filteryear);
  }, [filtercallbackhandler, props.items]);

  return (
    <div>
      <Card className="expenses">
        <FilteredExpenses
          selectedyear={filteryear}
          onChange={filtercallbackhandler}
        />
        {!items.length && (
          <div className="NoItems">
            <p>No items present in list</p>
          </div>
        )}
        {items &&
          items.map((each, idx) => (
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

export default Expense;
