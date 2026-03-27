import React,{useState} from "react";
export default function ApiCallone(){
    const[api,setapi]=useState([])
    const handlefetch = async()=>{
        let data = await fetch("https://fakestoreapi.com/products")
        let res = await data.json()
        console.log(res);
        setapi(res)
    }
    return(
        <div>
            <button onClick={handlefetch}>Api Call</button>
            {api.map((data)=>(
                <div>
                    <h1>Title:{data.title}</h1>
                    <img src={data.image} height="200px" width="200px" />
                    <h2>Price:{data.price}</h2>
                </div>
            ))}
        </div>
    )
}