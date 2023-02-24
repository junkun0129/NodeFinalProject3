import { GamePanel } from "./GamePanel.js";
export class Keyhandler{
    gp: GamePanel;
    upPressed:boolean = false;
    downPressed:boolean = false;
    leftPressed:boolean = false;
    rightPressed:boolean = false;
    iwatani:number = 1;


    constructor(gp:GamePanel){
        this.gp = gp;
        this.keyDown();
        this.keyUp();
       
    }

    public keyDown():void{


            window.addEventListener("keydown",(e)=>{

                if(this.gp.gameState === this.gp.fieldScene){

                    if(e.key === "w"){
                     this.upPressed = true;
                    }
                    if(e.key === "s"){
                     this.downPressed = true;
                    }
                    if(e.key === "a"){
                     this.leftPressed = true;
                    }
                    if(e.key === "d"){
                     this.rightPressed = true;
                    }
     
                    //menu open
                    if(e.key === "q"){
                     
                     this.gp.gameState = this.gp.menuScene;
                     this.gp.sound[1].playMusic();
                     console.log("menu open");
                     
                    }
                }

                if(this.gp.gameState === this.gp.menuScene){
                    //menu indicator
                    if(e.key === "s"){

                        if(this.gp.ui.menuNumber<5){

                            this.gp.ui.menuNumber++;
                            console.log("menuNum"+this.gp.ui.menuNumber);
                            this.gp.sound[0].playMusic();
                        }
                    }

                    if(e.key === "w"){
                        if(this.gp.ui.menuNumber>1){

                            this.gp.ui.menuNumber--;
                            console.log("menuNum"+this.gp.ui.menuNumber);
                            this.gp.sound[0].playMusic();
                        }
                    }

                    //select item on menu
                    if(this.gp.ui.menuNumber === 1){
                        if(e.key === "e"){

                            this.gp.sound[1].playMusic();
                            this.gp.gameState = this.gp.statusViewScene;
                        }
                    }

                    //select item on menu
                    if(this.gp.ui.menuNumber === 2){
                        if(e.key === "e"){

                            this.gp.sound[1].playMusic();
                            this.gp.gameState = this.gp.itemViewSecne;
                            
                            
                        }
                    }

                    //select startover on menu
                    if(this.gp.ui.menuNumber === 4){
                        if(e.key === "e"){
                          
                            this.gp.sound[1].playMusic();
                            this.gp.gameState = this.gp.startOverMakeSureScene;
                            console.log("start over");
                            
                        }
                    }



                    

                    //select close on menu
                    if(this.gp.ui.menuNumber === 5){
                        if(e.key === "e"){
                            this.gp.sound[1].playMusic();
                            this.gp.gameState = this.gp.fieldScene;
                            console.log("menu close");
                        }
                    }

                    

                    
                }

                if(this.gp.gameState === this.gp.statusViewScene){
                    if(e.key === "e" && this.gp.ui.makesureWaite > 10){
                    
                            console.log(this.gp.ui.makesureWaite, ";lk;lj;")
                            this.gp.sound[1].playMusic();
                            this.gp.gameState = this.gp.menuScene;
                            this.gp.ui.makesureWaite = 0;
                    }
                }

                //select items on itemView
                if(this.gp.gameState === this.gp.itemViewSecne){

                    if(e.key === "w"){

                        
                        if(0<this.gp.ui.itemViewIndicateNum){

                            this.gp.ui.itemViewIndicateNum--;
                            console.log(this.gp.ui.itemViewIndicateNum);
                            this.gp.sound[0].playMusic();
                            
                        }

                       

                    }
                    if(e.key === "s"){
                        
                        if(this.gp.ui.itemViewNum>this.gp.ui.itemViewIndicateNum){

                            this.gp.ui.itemViewIndicateNum++;
                            console.log(this.gp.ui.itemViewIndicateNum);
                            this.gp.sound[0].playMusic();
                            
                        }
                        
                    }

                    if(this.gp.ui.itemViewIndicateNum === 0){
                        if(e.key === "e"){
                            console.log("ositayo")
                            if(this.gp.ui.makesureWaite>0){

                                this.gp.sound[1].playMusic();
                                this.gp.gameState = this.gp.menuScene;
                                this.gp.ui.itemViewNum = 1;
                                this.gp.ui.makesureWaite = 0;
                            }
                        }
                    }

                    
                }

                //on makesure screen
                if(this.gp.gameState === this.gp.startOverMakeSureScene){
                    if(e.key === "a"){
                        this.gp.ui.makesureNum = 1;
                        this.gp.sound[0].playMusic();
                        
                    }

                    if(e.key === "d"){
                        this.gp.ui.makesureNum = 2;
                        this.gp.sound[0].playMusic();
                        
                    }


                    //select yes (start over)
                    if(this.gp.ui.makesureNum ===1){
                        if(e.key === "e"){
                            if(this.gp.ui.makesureWaite>50){

                                this.gp.sound[1].playMusic();
                                this.gp.gameStartOver = true;

                                this.gp.gameState = this.gp.fieldScene;

                                this.gp.ui.makesureWaite = 0;

                            }
                        }

                    }
                    //select No (start over)
                    if(this.gp.ui.makesureNum === 2){
                        if(e.key === "e"){
                            
                            if(this.gp.ui.makesureWaite>50){

                                this.gp.sound[1].playMusic();
                                this.gp.gameState = this.gp.menuScene;
                                this.gp.ui.makesureWaite = 0;
                            }
                        }
                    }


                    
                }

                //talk
                if(this.gp.gameState === this.gp.talkingScene){
                    if(e.key === "e"){
                        console.log("kim yunson");
                        this.gp.sound[2].playMusic();
                        this.gp.npc[this.gp.whoSpeakIndex].dialogIndex++;
                        this.gp.npc[this.gp.whoSpeakIndex].speak();
                    }
                }

                if(this.gp.gameState === this.gp.objectTalkingScene){
                    if(e.key === "e"){
                        this.gp.sound[2].playMusic();
                        this.gp.books[this.gp.whichSpeakIndex].dialogIndex++;
                        this.gp.books[this.gp.whichSpeakIndex].speak();
                    }
                }


                
               
            })


            
        

        
       
    }
    public keyUp():void{
        if(this.gp.gameState === this.gp.fieldScene){

            window.addEventListener("keyup",(e)=>{
               if(e.key === "w"){
                this.upPressed = false;
               }
               if(e.key === "s"){
                this.downPressed = false;
               }
               if(e.key === "a"){
                this.leftPressed = false;
               }
               if(e.key === "d"){
                this.rightPressed = false;
               }
               
            })
        }

        
       
    }


}