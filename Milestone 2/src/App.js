
import React, { useState} from 'react'
import AddExpense from "./components/users/AddExpense";
import ExpenseList from "./components/users/ExpenseList";
import Expenses from "./components/users/Expenses";


function App(){
  const [expenses,setExpenses]=useState([]);
  const [expenseList,setExpenseList]=useState([]);
  const onAddExpenseHandler=(expenseName, expenseAmount,expenseDate)=>{
  
      setExpenseList((prevState)=>{
        
      return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
  );
  setExpenses((prevState)=>{
  
  return[...prevState,{name:expenseName,amount:expenseAmount,date:expenseDate,id:Math.random().toString()}]}
);
  
 }


  return (
    <div>
     <AddExpense onAddExpense={onAddExpenseHandler} />
  
      <ExpenseList list={expenseList}/>
      <Expenses items={expenses} /> 
    </div>
    
  
  );
};


export default App;
