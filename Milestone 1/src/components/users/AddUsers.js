import Button from "../UI/button";
import Card from "../UI/Card";
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal";

const AddUsers =(props)=>{
    //const[x,setX]=useState(); returns an array [0] = element [1]=a function only which can update the value of [0]
    //const[x,setX]=useState({enteredname:''}); used as x.enteredname, ect
    //console.log("hello");

    const[enteredUser, setEnteredUser]=useState('');
    const[enteredAge, setEnteredAge]=useState('');

    const addDataHandler=(event)=>{
        event.preventDefault();
        if(enteredUser.trim().length===0 || enteredAge.trim().length===0){
            alert("Please enter a UserName!");
        }
        if(+enteredAge<0){
            alert("Please enter a valid age!");
        }
        
        props.onAddUser(enteredUser,enteredAge);
        setEnteredAge('');
        setEnteredUser('');
    }

    const userChangeHandler=(event)=>{
        setEnteredUser(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    
    return (
        <Card>
            <form onSubmit={addDataHandler}>
                <div>
                    <label htmlFor="username">Enter UserName : </label>
                    <input id ="username" type="text" onChange={userChangeHandler} value={enteredUser}></input>
                </div>
                <div>
                    <label htmlFor="Age">Enter a valid Age : </label>
                    <input id ="Age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                </div>
                <Button type="submit">SUBMIT</Button>
            </form>
        </Card>
    )
}

export default AddUsers;