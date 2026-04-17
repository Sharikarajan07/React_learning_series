import axios from "axios";
import React, {useState,useEffect} from "react";

export default function Todolist(){

    const [grocery,setgrocery] = useState(" ");
    const [grocerylist,setgrocerylist] = useState([]);

    useEffect(() =>{
        handleget()
    },[])

    const handletodo = (e) =>{
        setgrocery(e.target.value)
    }
    const handlebtn = async() =>{
        let body ={
            task:grocery
        }
        let data = await axios.post("http://localhost:3000/todoList",body)

        alert("data sent successfully")

        handleget()
        
    }

    const handleget = async() =>{
        let datas = await axios.get("http://localhost:3000/todoList")
        setgrocerylist(datas.data)

        console.log(datas.data)
    }

    const handledelete = async(id) =>{
        let deletedata = await axios.delete("http://localhost:3000/todoList/"+id)
        console.log(id)
        handleget()
    }
    const handleedit = async(data) =>{

        let editeditem = prompt("edit data",data.task)
        let body = {
            task : editeditem
        }
        let editdata = await axios.put("http://localhost:3000/todoList/" + data.id, body)
        handleget()
    }
    

    return(
        <div>
            <h1>Todolist</h1>

            <label>Grocery</label>
            <input onChange={handletodo} placeholder="Enter the name" />
            <button onClick = {handlebtn}>Submit</button>

            {grocerylist.map((da)=>(
                <div>
                    <h1>{da.task}</h1>
                    <button onClick={() => {handleedit(da)}}>Edit</button>
                    <button onClick={() => handledelete(da.id)}>Delete</button>
        
                </div>
            ))}
        </div>
    )
}