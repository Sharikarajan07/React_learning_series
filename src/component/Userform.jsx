import React, { useState } from "react"
export default function Userform() {

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [show, setshow] = useState(false)

    const handlename = (event) => {
        setname(event.target.value)
    }
    const handlephone = (event) => {
        setphone(event.target.value)
    }
    const handleemail = (event) => {
        setemail(event.target.value)
    }

    const handlesubmit = () => {
        setshow(true)
    }


    return (
        <div>

            {!show ?

                <div>
                    <h1>User Form</h1>
                    <input onChange={handlename} type="text" placeholder="Enter your Name" />
                    <br />
                    <br />


                    <input onChange={handlephone} type="number" placeholder="Enter your phone number" />
                    <br />
                    <br />

                    <input onChange={handleemail} type="email" placeholder="Enter your email" />
                    <br />
                    <br />


                    <button onClick={handlesubmit}>Submit</button>
                </div>
                : null}
            {show ? <div>
                <h1>Form Submitted Successfully</h1>
                <h2>Name:{name}</h2>
                <h2>Phone number:{phone}</h2>
                <h2>Email:{email}</h2>
            </div>
                : null}


        </div>
    )


}