import * as React from 'react';
import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navi = useNavigate()
    return ( 
        <>
            <h1>Home</h1>
            <h1 onClick={(e)=>navi("/login")}>login</h1>
            <h1 onClick={()=>navi("/signup")}>home</h1>
        </>
     );
}

export default Home;