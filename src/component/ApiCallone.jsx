import React,{useState,useEffect} from "react";
export default function ApiCallone(){
    const[api,setapi]=useState([])
    
    const[count,setcount] = useState(0)

    useEffect(()=>{
        handlefetch()
    },[count])
    const handleadd= ()=>{
        setcount(count+1)
        console.log("adding")
    }

    const handlefetch = async()=>{
        let data = await fetch("https://api.escuelajs.co/api/v1/products")
        let res = await data.json()
        console.log(res);
        setapi(res)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleadd}>Add</button>
            {/* <button onClick={handlefetch}>Api Call</button> */}
            {api.map((data)=>(
                <div>
                    <h1>Title:{data.title}</h1>
                    <img src={data.images} height="200px" width="200px" />
                    <h2>Price:{data.price}</h2>
                </div>
            ))}
        </div>
    )
}