import * as React from 'react';
import { Component, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServerToClientEvents, ClientToServerEvents } from '../App';
import { Socket } from 'socket.io-client';
import { GamePanel } from '../fieldcompo/GamePanel';
import {motion} from "framer-motion";
import styles from "./Field.module.scss";

export type socketType = {
    socket: Socket<ServerToClientEvents, ClientToServerEvents>
}
function Field({socket}:socketType) {

    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const [game, setGame] = useState<GamePanel|null>(null)
    const [isEncount, setIsEncount] = useState<boolean>(false);
    useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas)return;
        const c = canvas.getContext("2d");
        if(!c)return;
        let game = new GamePanel(c, socket);
        setGame(game);
    },[])

    useEffect(()=>{
        game?.setup();
    }, [game])

    useEffect(()=>{
        socket.on("screenSwitch", (data)=>{
            setIsEncount(true)
            console.log("entounttttttttttt")
          })
    },[socket])

   const encount = {
    none:{},
    dissapiar:{

        scale: [1, 2, 0.5, 0.5, 3, 1 ,0.5],
        rotate: [0, 50, 20, 30, 20, 0, 0],
        x:[0,0,0,0,0,0,0,0,-300,1500]
    }
    }

    
    return ( 
        <>
            <motion.canvas className={styles.field} ref = {canvasRef} width = {window.innerWidth} height={window.innerHeight}
                variants = {encount}
                animate = {isEncount?"dissapiar":"none"}
                transition = {{
                    duration:2
                }}
            ></motion.canvas>  
        </>
     );
}

export default Field;