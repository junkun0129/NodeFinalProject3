import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hello({socket}) {

    const [input, setInput] = useState("");
    const navi = useNavigate()

    const iwatani = 3

    const handlesubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("Input", input)
        console.log("button")
        socket.emit("newInput", {input, socketID:socket.id})
        navi("/")
    }

    return ( 
        <>
            <h1>hello</h1>
            <form onSubmit={handlesubmit}>

                <input 
                    type="text" 
                    value={input} 
                    onChange = {(e)=>setInput(e.target.value)}
                    name = "input"
                />

                <button type='submit'>button</button>
                    
            </form>
        </>
     );
}

export default Hello;