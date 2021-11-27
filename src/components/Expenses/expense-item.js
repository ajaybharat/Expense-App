import "./expense-item.css";
import Card from "../UI/card";
import ExpenseDate from "./expense-data";

const expenseItem = (props) => {
  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price}</div>
        </div>
      </Card>
    </div>
  );
};

export default expenseItem;
