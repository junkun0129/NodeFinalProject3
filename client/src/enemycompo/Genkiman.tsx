import * as React from 'react';
import { Component } from 'react';
import {motion, useMotionValue, useTransform} from "framer-motion";

function Genkiman() {

    const scaleLeft = useMotionValue(1)
    const scaleRight = useTransform(scaleLeft, s=>1/s)
    const headRotate = useTransform(scaleLeft, [0.5, 2], [-15, 15])
    const style = {
        display:"flex", 
        zIndex:1,
        height:"300px",
        width:"100%",
        fontSize:"100px",
        marginTop:"100px"
    }
    return ( 
        <>
            
                <div style={style}>
                    <motion.div
                        style={{scale:scaleLeft}}
                        animate = {{
                            scale:[1,0.5,2],
                            
                        }}
                        transition={{repeat:1000,repeatType:"mirror", times:[0,0.8,1], duration:0.5}}
                        >
                    👊
                    </motion.div>

                    <motion.div style={{rotate:headRotate}}>😁</motion.div>

                    <motion.div style={{scaleX:-1, scale:scaleRight}}>
                    👊    
                    </motion.div>
                </div>


            
        </>
     );
}

export default Genkiman;