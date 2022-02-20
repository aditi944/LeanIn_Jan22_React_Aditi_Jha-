import React from "react";
import Card from "../UI/Card";

const ExpenseList=(props)=>{

    return (
        <Card>
            <h2 >List after filtering</h2>
            <ol>
                {props.list.map((user)=>(
                    <li key={user.id}>
                       {user.name}"-"{user.amount} on {user.date}
                    </li>
                ))}
            </ol>
        </Card>
    );
}

export default ExpenseList;