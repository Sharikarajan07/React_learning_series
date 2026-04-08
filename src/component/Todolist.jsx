import React, {useState,useEffect} from "react";

export default function Todolist(){

    const [grocery,setgrocery] = useState(" ");

    const handletodo = (e) =>{
        setgrocery(e.target.value)
    }
    const handlebtn = () =>{
        
    }

    

    return(
        <div>
            <h1>Todolist</h1>

            <label>Grocery</label>
            <input onChange={handletodo} placeholder="Enter the name" />
            <buttton onClick = {handlebtn}>Submit</buttton>
        </div>
    )
}