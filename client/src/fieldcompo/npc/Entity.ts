import { GamePanel } from "../GamePanel.js";

export class Entity{

    gp: GamePanel;
    npcX: number = 0;
    npcY: number = 0;
    direction: string = "down";
    speed: number=1;
    actionCounter:number = 0;
    down1:string = "url";
    down2:string = "url";
    up1:string = "url";
    up2:string = "url";
    left1:string = "url";
    left2:string = "url";
    right1:string = "url";
    right2:string = "url";
    picture:string = "pictureURL";
    spriteCounter:number = 0;
    spriteNum:number = 1;
    dialogs:string[] = ["a", "i", "u", "e", "o"];
    dialogIndex:number = 0;

    field:number = 0;

    constructor(gp:GamePanel){
        this.gp = gp;
        
    
    }



    
    setDefault():void{}
    speak():void{}
    



    update(){
        this.setup();

        this.gp.collisionNPC = false;
        this.gp.collisionC.checkCollisionNPC(this.direction);
        let NPCbumped = this.gp.collisionC.CheckCollisionEntityToPlayer(this.direction);


        if(!this.gp.collisionNPC){

            switch(this.direction){
                case "down": this.npcY += this.speed; break;
                case "up": this.npcY -= this.speed; break;
                case "left": this.npcX -= this.speed; break;
                case "right": this.npcX += this.speed; break;
            }
        }
        


        this.spriteCounter++;
        if(this.spriteCounter >30){
            if(this.spriteNum === 1){
                this.spriteNum = 2;
            }else if(this.spriteNum === 2){
                this.spriteNum = 1;
            }
            this.spriteCounter = 0;
        }


    }

    setup():void {
        this.actionCounter++;
        if(this.actionCounter>120){
            this.actionCounter = 0;

            let directionNum = Math.floor(Math.random() * 5); 
            switch(directionNum){
                case 1: this.direction = "down"; break;
                case 2: this.direction = "up"; break;
                case 3: this.direction = "left"; break;
                case 4: this.direction = "right"; break;
            }

            
            
        }
    }
    

    draw(c:CanvasRenderingContext2D):void{
        if(this.gp.mapState === this.field){

            let image = new Image()
            let x = this.npcX - this.gp.player.playerX + 750;
            let y = this.npcY - this.gp.player.playerY + 350
            image.src = this.picture;
    
            switch(this.direction){
                case "down":
                    if(this.spriteNum === 1){
                        //image.src = "../../img/npc-down1.png";
                        c.drawImage(image, 0 ,0,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }else if(this.spriteNum === 2){
                        //image.src = "../../img/npc-down2.png";
                        c.drawImage(image, 65 ,0,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }
                    break;
                case "up":
                    if(this.spriteNum === 1){
                        //image.src = "../../img/npc-up1.png";
                        c.drawImage(image, 0 ,97,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }else if(this.spriteNum === 2){
                        //image.src = "../../img/npc-up2.png";
                        c.drawImage(image, 65 ,97,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }
                    break;
                case "left":
                    if(this.spriteNum === 1){
                        //image.src = "../../img/npc-left1.png";
                        c.drawImage(image, 0 ,33,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }else if(this.spriteNum === 2){
                        //image.src = "../../img/npc-left2.png";
                        c.drawImage(image, 65,33,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }
                    break;
                case "right":
                    if(this.spriteNum === 1){
                        //image.src = "../../img/npc-right1.png";
                        c.drawImage(image, 0 ,65,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }else if(this.spriteNum === 2){
                        //image.src = "../../img/npc-right2.png";
                        c.drawImage(image, 65 ,65,32,32,x,y,this.gp.tilesize,this.gp.tilesize);
                    }
                    break;
    
            }
        }
        

        
        //c.drawImage(image, x, y, this.gp.tilesize, this.gp.tilesize);
    }





}