import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 123123123, name: "Shopping", cost: 50 },
    { id: 123123123, name: "Holiday", cost: 300 },
    { id: 123123123, name: "Transportation", cost: 43 },
    { id: 123123123, name: "Fuel", cost: 40 },
    { id: 123123123, name: "Entertainment", cost: 70 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
