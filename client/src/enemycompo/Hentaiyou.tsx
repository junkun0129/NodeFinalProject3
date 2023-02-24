import * as React from 'react';
import { Component } from 'react';
import {motion, useMotionValue, useTransform} from "framer-motion";
import styles from "./Hentaiyou.module.scss"
function Hentaiyou() {
    const rotateLeftArm = useMotionValue(1);
    const rotateRightArm = useTransform(rotateLeftArm, [-50, 40], [15, -15])
    const rotateLeftLeg = useTransform(rotateLeftArm, [-50, 40], [-1, 30]);
    const rotateRightLeg = useTransform(rotateLeftArm, [-50, 40], [15, -15])
    const rotateFace = useTransform(rotateLeftArm, [-50, 40], [-20, 5])
    const style = {
        
        zIndex:1,
        height:"300px",
        width:"100%",
        fontSize:"100px",
        marginTop:"100px"
    }

    const face = {
        width: "170px",
        height: "170px",
        fontSize: "200px",
        marginLeft:"-70px",
        marginRight:"50px",
        marginTop:"-50px",
        rotate:rotateFace
    }

    const upBody = {
        display: "flex"
    }
    const bottomBody = {
        display: "flex",
        marginLeft: "100px"
    }
    return ( 
        <>
            <div style = {style}>
                <div style={upBody}>
                    <motion.div 
                        style={{rotate:rotateLeftArm}}
                        animate = {{
                            rotate:[-50,40,0],
                            scale:[1,1,1]
                        }}
                        transition = {{
                            repeat:1000,
                            repeatType:"mirror",
                            times:[1,0.5,2],
                            ease:"linear",
                            
                        }}
                    >💪</motion.div>
                    {/* <motion.img style={face} src = "img/isac.jpeg"></motion.img> */}
                    <motion.div style={face}>🌞</motion.div>
                    <motion.div style = {{scaleX: -1, rotate:rotateRightArm}}>💪</motion.div>
                </div>
                <div style = {bottomBody}>
                    <motion.div style={{rotate:rotateLeftLeg}}>🦵</motion.div>
                    <motion.div style={{rotate:rotateRightLeg}}>🦵</motion.div>
                </div>
                
            </div>
        </>
     );
}

export default Hentaiyou;