import * as React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const navigate = useNavigate();
    const [contents, setContents] = useState(null);
    const [error, setError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async(e:React.SyntheticEvent)=>{

        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        console.log(JSON.stringify({email, name, password}))
        

        fetch("https://node-final-project2-client-wkjq.vercel.app/auth/signup",{
            method:"POST",
            body: JSON.stringify({email, password, name}),
            headers: { "Content-Type":"application/json"}
        }).then(async response=>{
            if(!response.ok){
                if(response.status === 404) setError("user already exists")
                
            }else{
                const data = await response.json();
                console.log(data);
                navigate("/login");
            }
        }).catch(error=>{
            console.log(error.message)
        }).finally(()=>setIsSubmitting(false))


    }


    return ( 
        <>
            <h1>Signup</h1>
            <form onSubmit={submitForm}>
                <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" name='name'value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type='submit'>button</button>
            </form>
            {error && <h1>{error}</h1>}
        
        </>
     );
}

export default Signup;