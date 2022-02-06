

//import TextInput from "./components/TextInput";
//import Welcome from "./components/Welcome";
import { useState } from "react";
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";



function App(){
  const [usersList,setUsersList]=useState([]);

const onAddUserHandler=(userName, userAge)=>{
  setUsersList((prevState)=>{
    return[...prevState,{name:userName,age:userAge,id:Math.random().toString()}]}
  )
}

  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler}/>
      <UsersList list={usersList}/>
    </div>
  );
}

export default App;
