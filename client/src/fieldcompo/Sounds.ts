import { GamePanel } from "./GamePanel.js";

export class Sounds{
    public gp:GamePanel;
    public url:string;
    //public MusicControlNum:number = 0;
    

    constructor(gp:GamePanel, url:string){

        this.gp = gp;
        this.url = url;
        
    }


    playMusic(){
        
        // this.MusicControlNum++

        // if(this.MusicControlNum > 50){

        //     let audio = new Audio(this.url);    
        //     audio.play();
        //     this.MusicControlNum = 0;
            
        // }

        let audio = new Audio(this.url);    
        audio.play();
    }

   
}