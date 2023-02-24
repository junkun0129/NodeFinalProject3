import React, { Component, useEffect } from 'react';
import { useState, useRef } from 'react';
function Game() {

    const canvasRef = useRef(null)
    const [game, setGame] = useState(null)

    useEffect(()=>{
        const canvas = canvasRef.current;

        if(!canvas)return;

        const c = canvas.getContext("2d");

        if(!c)return;

        let game = new GamePanel(c);
        setGame(game);
    },[])

    return ( 
        <>
            <canvas ref={canvasRef} width = {"1500"} height = {"700"}></canvas>
        </>
     );
}

export default Game;