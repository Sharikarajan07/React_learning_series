//props

import React,{useState} from "react";

export default function Moviebook(props){

   

    const handleclick=()=>{
        alert("Movie booked");

        
    }

    return(

        <div>
            <h1>Movie Name: {props.name} </h1>
            <h2>ticket price: {props.rent} </h2>

            <button onClick={handleclick}>Book</button>
        </div>
    )
}