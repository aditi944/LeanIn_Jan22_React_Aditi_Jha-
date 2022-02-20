import Button from "../UI/button";
import Card from "../UI/Card";
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal";

const AddExpense =(props)=>{
 

    const[enteredName, setEnteredName]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    const[error, setError]=useState();

    const addDataHandler=(event)=>{
        
        event.preventDefault();
        if(enteredName.trim().length===0 || enteredAmount.trim().length===0){
            setError({title:"Error",message:"Please enter relevant values"});
            return;
        }
        if(+enteredAmount<0){
            setError({title:"error",message:"Please enter valid amount"});
            return;
        }
        
        props.onAddExpense(enteredName,enteredAmount,enteredDate);
        setEnteredAmount('');
        setEnteredName('');
        setEnteredDate('');
    }

    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const onConfirm=()=>{
        setError(null);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    
    return (
        <>
        {error&& <ErrorModal title={error.title} message={error.message} onConfirm={onConfirm} /> }
        <Card>
            <form onSubmit={addDataHandler}>
                <div>
                    <label htmlFor="expensename">Enter Name : </label>
                    <input id ="expensename" type="text" onChange={NameChangeHandler} value={enteredName}></input>
                </div>
                <div>
                    <label htmlFor="amount">Enter amount: </label>
                    <input id ="amount" type="number" onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div>
                    <label htmlFor="Expense Date">Select Date : </label>
                    <input type="date" id="expensedate" min='2018-01-01'max='2022-12-31' onChange={DateChangeHandler} value={enteredDate}></input>
                </div>
                <Button type="submit">Add To The List</Button>
            </form>
        </Card>
        </>
    )
}

export default AddExpense;


