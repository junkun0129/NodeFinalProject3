import * as React from 'react';
import { Component, useState } from 'react';
import {useNavigate} from "react-router-dom"
import { createUser } from '../store/features/userStatuSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const [error, setError] = useState("");
    const userStatusDispach = useAppDispatch();
    const userStatus = useAppSelector(state=>state.reducer.userStatusReducer)
    const navigate = useNavigate();

    const loginsubmit = (e:React.SyntheticEvent)=>{
        e.preventDefault();
        setIsSubmit(true);
        setError("");
        console.log({email, password}, "this is it")
        fetch("https://node-final-project2-client-wkjq.vercel.app/auth/signin", {
            method:"POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type":"application/json"}
        }).then(async response=>{

            if(!response.ok){
                if(response.status === 400) setError("incorrect password")
                else if(response.status === 404)setError("user doesnot exist")
                else setError("Something went wrong :<")
            }else{
                console.log(response.ok)
                const data = await response.json()
                console.log(data)
                userStatusDispach(createUser({
                    userId:data.userId,
                    email:data.email,
                    name:data.name,
                    status:{
                        at:data.status.at,
                        exp:data.status.exp,
                        hp:data.status.hp,
                        maxmumHp:data.status.maxmumHp,
                        level:data.status.level
                    }
                }))
                
                navigate("/game")
            }
        }).catch(error=>{
            setError(error.message || "Something went wrong")
        }).finally(()=> setIsSubmit(false))
    }

    return ( 
        <>  
        {error&&<h1>{error}</h1>}
            <h1>login</h1>
            <form onSubmit={loginsubmit}>
                <input type="text" name='email' value = {email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit'>button</button>
            </form>
        </>
     );
}

export default Login;