import React, { useState } from 'react';

import ExpenseFilterList from './ExpenseFilterList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  console.log(filteredYear);
  const filteredExpenses = props.items.filter((user)=>{
    return user.date.toString().startsWith(filteredYear)
  });
  console.log(filteredExpenses);
   
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </Card>
      <ExpenseFilterList list={filteredExpenses}/>
    </div>
  );
};

export default Expenses;