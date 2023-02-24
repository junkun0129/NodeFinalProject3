import { GamePanel } from "./GamePanel.js";
export class Player{
    public gp: GamePanel;
    public direction: string;
    public playerX:number;
    public playerY:number;
    public playerXOriginal:number;
    public playerYOriginal:number;
    public speed:number;

    public screenX:number;
    public screenY:number;

    public spriteCounter:number=0;
    public spriteNum:number = 1;

    public itemInventory:{name: string, x:number, y:number, picture:string, collision:boolean}[] = [];

    public image:any;

    public previousRoom!: number;
    
   

    constructor(gp:GamePanel){
        this.gp = gp;
        this.direction = "down";
        this.playerXOriginal = 3000;
        this.playerYOriginal = 2000;
        this.playerX = this.playerXOriginal;
        this.playerY = this.playerYOriginal; 
        this.speed = 7;

        this.screenX = 750;
        this.screenY = 350;

        this.image = new Image;
        
    }   


    public update():void{
        
        if(this.gp.keyH.downPressed === true || this.gp.keyH.upPressed === true || this.gp.keyH.leftPressed === true || this.gp.keyH.rightPressed === true){
            
            
           
            if(this.gp.keyH.downPressed === true){this.direction = "down";console.log("down")};
            if(this.gp.keyH.upPressed === true){this.direction = "up";console.log("up")};
            if(this.gp.keyH.leftPressed === true){this.direction = "left";console.log("left")};
            if(this.gp.keyH.rightPressed === true){this.direction = "right";console.log("right")};

            this.gp.collision = false;

            //player to collision
            this.gp.collisionC.checkCollisionEntity(this.direction);
            

            //intract with NPC
            let NPCbumped = this.gp.collisionC.CheckCollisionPlayerToEntity(this.direction);
            this.intaractNPC(NPCbumped);

            
            //intract with object
            let deleteIndex = this.gp.collisionC.CheckCollisionObject(this.direction);
            if(deleteIndex !== 999){
                this.picableIf(deleteIndex);
            }

            //books
            let BookIndex = this.gp.collisionC.CheckCollisionBooks(this.direction)
            this.intaractBooks(BookIndex);

            //previous room
            this.previousRoom = this.gp.mapState;

            //intract with doors
            this.gp.collisionC.CheckCollisionDoors(this.direction);
            this.playerPosition();

            
           
           //player walking
            if(!this.gp.collision){

                switch(this.direction){
                    case "down":{this.playerY+=this.speed; console.log(this.direction); break;}
                    case "up":{this.playerY-=this.speed; console.log(this.direction); break;}
                    case "left":{this.playerX-=this.speed; console.log(this.direction); break;}
                    case "right":{this.playerX+=this.speed; console.log(this.direction); break;}
                }
            }
            
            //change spritesheet like walking
            this.spriteCounter++;
            if(this.spriteCounter > 10){
                if(this.spriteNum === 1){
                    this.spriteNum = 2;
                }else if(this.spriteNum === 2){
                    this.spriteNum = 1;
                }
                this.spriteCounter = 0;
            }

            //coodinates
            console.log("this is x", this.playerX)
            console.log("this is y", this.playerY);

        }
    }

    public intaractNPC(i:number){
        if(i !== 999){

            console.log(this.gp.npc[i]);
            this.gp.whoSpeakIndex = i;
            this.gp.gameState = this.gp.talkingScene;
            this.gp.npc[i].speak();
        }
    }

    public intaractBooks(i:number):void{
        if(i !== 999){
            if(this.gp.books[i].jumpable)window.location.href = "/book";
            if(this.gp.books[i].speakable){
                this.gp.whichSpeakIndex = i;
                this.gp.gameState = this.gp.objectTalkingScene;
                this.gp.books[i].speak();
            }
        }
    }

    public picableIf(deleteIndex:number):void{
        //if item pickable
        if(this.gp.asset.itemsOnMap[deleteIndex].pickable){

            this.itemInventory.push(this.gp.asset.itemsOnMap[deleteIndex]);
            this.gp.strageM.setToStrage("itemInventory", this.itemInventory);
            
            this.gp.asset.itemsOnMap.splice(deleteIndex,1);
            this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);
            
        }else if(this.gp.asset.itemsOnMap.length>0){

            if(this.gp.asset.itemsOnMap[deleteIndex].name === "rock"){
            
                for(let i:number = 0; this.itemInventory.length>i; i++){
                    if(this.itemInventory[i].name === "bomb"){
                        
                        let rock = this.gp.asset.itemsOnMap.findIndex(array => array.name === "rock");
                        
                        this.gp.asset.itemsOnMap.splice(rock, 1);
                        this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);

                        this.itemInventory.splice(i,1);
                        this.gp.strageM.setToStrage("itemInventory", this.itemInventory);

                    }
                }
                
            }
        }
    }

    public playerPosition(){

        if(this.gp.mapsChange){

            if(this.gp.mapState !== this.gp.field1){
                //in room
                const nowDoor = this.gp.doors.filter((door)=>door.from === this.gp.mapState);
                console.log(nowDoor[0])
                this.playerX = nowDoor[0].x;
                this.playerY = nowDoor[0].y-50;
            }else{
                //go field out of room
                const doorsInFirld = this.gp.doors.filter((door)=>door.from === this.gp.mapState)
                console.log(doorsInFirld, "doorinfirld")
                const rightDoor = doorsInFirld.filter((door)=>door.to === this.previousRoom);
                console.log(rightDoor, "this is right")
                this.playerX = rightDoor[0].x
                this.playerY = rightDoor[0].y+50
            }
                
        }  
    }

    public draw(c:CanvasRenderingContext2D):void{
      this.image.src = "/img/main.png";
        

        switch(this.direction){
            case "down":
                if(this.spriteNum === 1){
                    //this.image.src = "/img/yuusya-down1.png";
                    c.drawImage(this.image, 0,0,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }else if(this.spriteNum === 2){
                    //this.image.src = "/img/yuusya-down2.png";
                    c.drawImage(this.image, 65,0,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }
                break;
            case "up":
                if(this.spriteNum === 1){
                    //this.image.src = "/img/yuusya-up1.png";
                    c.drawImage(this.image, 0,97,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }else if(this.spriteNum === 2){
                    //this.image.src = "/img/yuusya-up2.png";
                    c.drawImage(this.image, 65,97,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }
                break;
            case "left":
                if(this.spriteNum === 1){
                    //this.image.src = "/img/yuusya-left1.png";
                    c.drawImage(this.image, 0,33,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }else if(this.spriteNum === 2){
                    //this.image.src = "/img/yuusya-left2.png";
                    c.drawImage(this.image, 65,33,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }
                break;
            case "right":
                if(this.spriteNum === 1){
                    //this.image.src = "/img/yuusya-right1.png";
                    c.drawImage(this.image, 0,65,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }else if(this.spriteNum === 2){
                    //this.image.src = "/img/yuusya-right2.png";
                    c.drawImage(this.image, 65,65,32,32,this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
                }
                break;
            

        }   

        //if(this.spriteCounter<= 100)

        // c.drawImage(this.image, this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
        
       

    }
}
