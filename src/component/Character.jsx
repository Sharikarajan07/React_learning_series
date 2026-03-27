import React,{useState} from "react";

export default function Character (){
    const [anime,setanime]=useState(["luffy","sanji","zoro","nami"])

    return(
        <div>
            <h1>Anime Info</h1>
            {anime.map((da) =>(
                <h1>{da}</h1>  

            ))}
        </div>
    )


}