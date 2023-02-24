import * as React from 'react';
import { Component } from 'react';
import styles from "./Battle.module.scss";
import {motion, MotionValue, motionValue, useMotionValue, useMotionValueEvent, useTransform} from "framer-motion"
import { socketType } from './Field';
import { useState, useEffect } from 'react';
import Genkiman from '../enemycompo/Genkiman';
import {star} from "./SvgPath"
import Hentaiyou from '../enemycompo/Hentaiyou';
import HP from '../component/HP';
import { useAppDispatch, useAppSelector } from '../store/store';
import { maketozero1,maketozero2,maketozero3,atackEnemy1, atackEnemy2, atackEnemy3, createEnemy1, createEnemy2, createEnemy3 } from '../store/features/enemySlice';
import {restoreHP,getAttackFromEnemy} from "../store/features/userStatuSlice"

export type enemeyStatusType = {
    hp:number,
    at:number
}
function Battle({socket}:socketType) {
    const [isEncount, setIsEncount] = useState<boolean>(false);
    const [enemyDragState, setEnemyDragState] = useState(0);
    const enemy1position = 1;
    const enemy2position = 2;
    const enemy3position = 3

    const [backScreen, setBackScreen] = useState(false);

    const battleOffScene = 0;
    const appearedScene = 1
    const yourTurnScene = 2;
    const yourActionScene =3 
    const enemiesTurnScene = 4;
    const enemiesActionScene = 5
    const afterBattleScene = 6;
    const [sceneState, setSceneState] = useState<number>(0);

    const [error, setError] = useState("");
    const appearDialog = "Enemy appeared!!"
    const yourturnDialog = "Your turn"
    const enemyDialog = "'s attack!"
    
    const createEnemyDispatch = useAppDispatch()
    const enemy1Selector = useAppSelector(state=>state.reducer.enemy1Reducer)
    const enemy2Selector = useAppSelector(state=>state.reducer.enemy2Reducer)
    const enemy3Selector = useAppSelector(state=>state.reducer.enemy3Reducer)
    const userselector = useAppSelector(state=>state.reducer.userStatusReducer)
    let [enemy1max, setEnemy1max]= useState(0)
    let [enemy2max, setEnemy2max]= useState(0)
    let [enemy3max, setEnemy3max]= useState(0)

    const [enemy1at, setEnemy1at] = useState(false)
    const [enemy2at, setEnemy2at] = useState(false)
    const [enemy3at, setEnemy3at] = useState(false)

    const [dialog, setDialog] = useState<string>("");

    // const [dragX, setDragX] = useState<number>(0)
    // const [dragY, setDragY] = useState<number>(0)
    let dragX = useMotionValue(0);
    let dragY = useMotionValue(0)


    
    const [drag, setDrag]= useState(0);
    const [enemy1, setEnemy1] = useState<JSX.Element[]|null>(null)
    const [enemy2, setEnemy2] = useState<JSX.Element[]|null>(null)
    const [enemy3, setEnemy3] = useState<JSX.Element[]|null>(null)
    const enemyhp1:MotionValue = motionValue(enemy1Selector.hp) 
    const enemyhp2:MotionValue = motionValue(enemy2Selector.hp) 
    const enemyhp3:MotionValue = motionValue(enemy3Selector.hp) 
    // const restHP1:MotionValue<number> = useTransform(enemyhp1,[0,enemy1max], [0,100])
    // const restHP2:MotionValue<number> = useTransform(enemyhp2,[0,enemy2max], [0,100])
    // const restHP3:MotionValue<number> = useTransform(enemyhp3,[0,enemy3max], [0,100])
    // const lostHP1:MotionValue<number> = useTransform(enemyhp1, [0,enemy1max],[100,0])
    // const lostHP2:MotionValue<number> = useTransform(enemyhp2, [0,enemy2max],[100,0])
    // const lostHP3:MotionValue<number> = useTransform(enemyhp3, [0,enemy3max],[100,0])
    // console.log(sceneState, ";saldfkjs;ldfkj;sldfkj;saldkfj")
    useEffect(()=>{
        socket.on("screenSwitch", (data)=>{
            setIsEncount(true)
            console.log("entounttttttttttt")
            
            setSceneState(appearedScene);
            // const nullOr1:number = Math.floor(Math.random()*4)
            // const nullOr2:number = Math.floor(Math.random()*4)
            // const nullOr3:number = Math.floor(Math.random()*4)
            // setEnemy1(nullOr1===2?randomize(enemyArr):null)
            // setEnemy2(nullOr2===2?randomize(enemyArr):null)
            // setEnemy3(nullOr3===2?randomize(enemyArr):null)
            
            // if(nullOr1===2&&nullOr2===2&&nullOr3===2)setEnemy2(randomize(enemyArr));
            
            fetch("https://node-final-project2-client-wkjq.vercel.app/enemy/create", {
                method:"GET",
                headers: {"Content-Type":"application/json"} 
            }).then(async response=>{
                if(!response.ok){
                    if(response.status === 400) setError("incorrect password")
                    else if(response.status === 404)setError("user doesnot exist")
                    else setError("Something went wrong :<")
                }else{
                    const data = await response.json();
                    // console.log(data)
                    setEnemy1(enemyArr.filter(e=>e.type.name === data.enemy1.name))
                    createEnemyDispatch(createEnemy1(data.enemy1))
                    setEnemy1max(data.enemy1.hp)
                    setEnemy2(enemyArr.filter(e=>e.type.name === data.enemy2.name))
                    createEnemyDispatch(createEnemy2(data.enemy2))
                    setEnemy2max(data.enemy2.hp)
                    setEnemy3(enemyArr.filter(e=>e.type.name === data.enemy3.name))
                    createEnemyDispatch(createEnemy3(data.enemy3))
                    setEnemy3max(data.enemy3.hp)
                    
                }
            })
        })

        socket.on("backSwitch", (data)=>{
            setBackScreen(true);
        })
    },[socket])

    useEffect(()=>{enemy1max=enemy1Selector.hp},[enemy1])
    useEffect(()=>{enemy2max=enemy2Selector.hp},[enemy2])
    useEffect(()=>{enemy3max=enemy3Selector.hp},[enemy3])
    
    useEffect(()=>{
        setDialog(appearDialog);
    },[sceneState === appearedScene])

    const [startover, setStartover] = useState(0)
    useEffect(()=>{
        setDialog(yourturnDialog);
    },[sceneState === yourTurnScene])
    let [pre, setPre] = useState(0);
    let [ll ,setLl] = useState(1);
    useEffect(()=>{
        const attackNum = Math.floor(Math.random()*4)
        let enemyName = "";
        
        if(ll===2){

            // enemyName = enemy1Selector.name
            // setEnemy1at(true)
            // console.log("jjkjkjkj")
            if(attackNum === 1){
                enemyName = enemy1Selector.name
                setEnemy1at(true)
                createEnemyDispatch(getAttackFromEnemy({attack:enemy1Selector.at}))
                setPre(1)
                setStartover(1)
            }else if(attackNum === 2){
                enemyName = enemy2Selector.name
                setEnemy2at(true)
                createEnemyDispatch(getAttackFromEnemy({attack:enemy2Selector.at}))
                setPre(1)
                setStartover(1)
            }else{
                enemyName = enemy3Selector.name
                setEnemy3at(true)
                createEnemyDispatch(getAttackFromEnemy({attack:enemy3Selector.at}))
                setPre(1)
                setStartover(1)
            }
            setDialog(enemyName+enemyDialog)
        }

        setLl(2)
    },[sceneState===enemiesTurnScene])

    // useMotionValueEvent(dragY, "change", ()=>{
    //     console.log(dragY.get(), "kore")
    //     if(dragY.get()<400){
    //         console.log("attck")
    //     }
    // })

    useEffect(()=>{
        if(pre===1){

            setEnemy1at(false)
            setPre(0)
            setLl(1)
            
            setEnemy2at(false)
            setEnemy3at(false)
            setSceneState(2);
            setDialog(yourturnDialog)
            setEnemyDragState(0)
            setStartover(0)
        }
    },[startover===1])


    useEffect(()=>{
        setSceneState(7)
    },[enemy1Selector.hp<=0&&enemy2Selector.hp<=0&&enemy3Selector.hp<=0])

    useEffect(()=>{
        socket.emit("back", "backback")
    },[sceneState===7&&enemy1Selector.hp<=0&&enemy2Selector.hp<=0&&enemy3Selector.hp<=0])
    console.log(userselector.status.hp, "this is players hp")
    // const stateChanger = ()=>{
    //     if(sceneState<2){
    //         setSceneState(sceneState+1);
    //     }
    //     // console.log("statechange")
    // }
    const variant = {
        hidden:{
           
        },
        show:{
            x:[-1600,400,0,0,0],
            scale:[0.7,0.7,0.7,0.4,1]
        },
        back:{
            x:[0,400,0,0,-1600],
            scale:[0.7,0.7,0.7,0.4,1]
        }
    }

    let enemyArr = [<Genkiman/>,<Hentaiyou/>]
    console.log(enemy1at)
    const randomize=(myArray:JSX.Element[])=> {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }
    // console.log(enemy1Selector, enemy2Selector, enemy3Selector)
    // console.log(dragX.get(),dragY.get())
    return ( 

        <>
            
            
            <motion.div className={styles.battleBox} 
                variants = {variant}
                transition = {{delay:2, duration:2}}
                animate = {backScreen?"back":isEncount?"show":"hidden"}
                
                >
                

                    <motion.div 
                        transition = {sceneState===enemiesTurnScene?{
                                times:[0,0.5,0.6,0.7, 1],duration:0.5, delay:2
                            }:{}}
                        animate = {sceneState===enemiesTurnScene&&{
                            rotate:[0,-5,10,-5, 0]
                        }}
                        className={styles.innnerBattleBox}>

                        <div className={styles.enemeyField}>
                            <motion.div className={styles.fieldEach} 
                                animate={enemy1Selector.hp<=0?{opacity:0}:{opacity:1}}
                                transition={{}}
                            >
                                <div style={{display:"flex",justifyContent:"space-between", width:400, height:40,}}>
                                    <div className={styles.enemyName}>{enemy1Selector.name}:</div>
                                    <div style={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        
                                        width:"60%",
                                        height:"70%",
                                        background:`linear-gradient(to left, black ${(1-enemy1Selector.hp/enemy1max)*100}%, red ${(1-enemy1Selector.hp/enemy1max)*100}% ${enemy1Selector.hp/enemy1max*100}%)`,
                                        borderRadius:"10px",
                                        border:"solid white 5px"
                                    }}></div>
                                    
                                </div>
                                <motion.div 
                                transition={{times:[0,0.2,0.4,1],duration:2}}
                                exit = {{x:0, scale:0}}
                                animate={enemy1at===true?{
                                    zIndex:[100,100,100,100],
                                    x:[500,-500,500,500],
                                    scale:[1,1,1,1.5]
                                }:enemyDragState===enemy1position?{border:"solid 5px red", borderRadius:"20px"}:{}}>
                                    {enemy1}
                                </motion.div>
                                
                            </motion.div>
                            <motion.div className={styles.fieldEach} animate={enemy2Selector.hp<=0?{opacity:0}:{opacity:1}}>
                                <div style={{display:"flex",justifyContent:"space-between", width:400, height:40,}}>
                                    <div className={styles.enemyName}>{enemy1Selector.name}:</div>
                                    <div style={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        
                                        width:"60%",
                                        height:"70%",
                                        background:`linear-gradient(to left, black ${(1-enemy2Selector.hp/enemy2max)*100}%, red ${(1-enemy2Selector.hp/enemy2max)*100}% ${enemy2Selector.hp/enemy2max*100}%)`,
                                        borderRadius:"10px",
                                        border:"solid white 5px"
                                    }}></div>
                                    
                                </div>
                                
                                <motion.div 
                                transition={{times:[0,0.2,0.4,1],duration:2}}
                                exit = {{x:0, scale:0}}
                                animate={enemy2at?{
                                        zIndex:[100,100,100,100],
                                        x:[500,-500,0,0],
                                        scale:[1,1,1,1.5]
                                }:enemyDragState===enemy2position?{border:"solid 5px red", borderRadius:"20px"}:{}}>
                                    {enemy2}
                                </motion.div>
                                
                            </motion.div>
                            <motion.div className={styles.fieldEach} animate={enemy3Selector.hp<=0?{opacity:0}:{opacity:1}}>
                                <div style={{display:"flex",justifyContent:"space-between", width:400, height:40,}}>
                                        <div className={styles.enemyName}>{enemy1Selector.name}:</div>
                                        <div style={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        
                                        width:"60%",
                                        height:"70%",
                                        background:`linear-gradient(to left, black ${(1-enemy3Selector.hp/enemy3max)*100}%, red ${(1-enemy3Selector.hp/enemy3max)*100}% ${enemy3Selector.hp/enemy3max*100}%)`,
                                        borderRadius:"10px",
                                        border:"solid white 5px"
                                        }}></div>
                                </div>
                                <motion.div 
                                transition={{times:[0,0.2,0.4,1],duration:2}}
                                exit = {{x:0, scale:0}}
                                animate={enemy3at?{
                                    zIndex:[100,100,100,100],
                                        x:[-500,500,-500,-500],
                                        scale:[1,1,1,1.5]
                                }:enemyDragState===enemy3position?{border:"solid 5px red", borderRadius:"20px"}:{}}>
                                    {enemy3}
                                </motion.div>
                                
                            
                            </motion.div>
                        </div>
                        
                        <div style={{display:"flex", justifyContent:"center", zIndex:3}}
                            onClick = {()=>setSceneState(2)} 
                            className={styles.hp}
                        >  
                            <HP 
                                dialog = {dialog} 
                                sceneState = {sceneState}
                                dragX = {(x)=>dragX.set(x)}
                                dragY = {(y)=>dragY.set(y)}
                                dragState={(i)=>setDrag(i)}
                                enemyDragState={(d)=>setEnemyDragState(d)}
                                childSceneState = {(s)=>setSceneState(s)}
                                startover = {startover}
                            ></HP>
                        </div>
                        
                        <div className={styles.option}>
                            <motion.div 
                                    className={styles.shield}
                                    animate={drag===2?{
                                        width:"50%",
                                        height:"100%"
                                    }:{}}
                            >shield</motion.div>
                            <motion.div 
                                    className={styles.item}
                                    animate={drag===3?{
                                        width:"50%",
                                        height:"100%"
                                    }:{}}
                            >item</motion.div>
                        </div>
                    <button onClick={(e)=>{createEnemyDispatch(restoreHP({hp:20}))}}>restore</button>
                    <button onClick={(e)=>{createEnemyDispatch(maketozero1())}}>;alskj</button>
                    <button onClick={(e)=>{createEnemyDispatch(maketozero2())}}>;alskj</button>
                    <button onClick={(e)=>{createEnemyDispatch(maketozero3())}}>;alskj</button>
                    </motion.div>
                    
            </motion.div>
            
            {/* <motion.div drag className={styles.you}>
                <h1>oi</h1>
            </motion.div> */}
        </>
     );
}

export default Battle;