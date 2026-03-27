import React, { useState } from "react";

let data = [{ name: "varanamayiram", ratings: 10 },
{ name: "kaka kaka", ratings: 9.9 },
{ name: "ayan", ratings: 8.5 },
{ name: "SOK", ratings: 10 }]
export default function Moviedetails() {
    const[details,setdetails]=useState(data);

    return(
        <div>
            <h1>Movie Details</h1>
            {details.map((da) =>(
                <div>
                    <h1>Name:{da.name}</h1>
                    <h2>Ratings:{da.ratings}</h2>
                </div>
            ))}
        </div>
    )

}