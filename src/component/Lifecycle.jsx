//useeffect-it is a hook used to access the lifecycle in the function

import { useEffect, useState } from "react";

export default function Lifecycle(){

    useEffect(()=>{
        handleadd()

        return()=>{
            console.log("dies")
        }
    })
    
    const handleadd= ()=>{
        console.log("hii luffy");
    }

    return(
        <div>
            {console.log("aaaaaaaaaa")}
            <h1>lifecycle</h1>
        </div>
    )
}