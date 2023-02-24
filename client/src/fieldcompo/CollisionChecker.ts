import { GamePanel } from "./GamePanel";
import { Player } from "./Player";

export class CollisionChecker{
    gp:GamePanel;

    constructor(gp:GamePanel){
        this.gp = gp;
    }

    checkCollisionEntity(direction:string):void{
        this.gp.collision = false;
        this.gp.collisionM.collisionArray.forEach((tile)=>{

            let collisionTileX:number = tile.worldX-this.gp.player.playerX+750;
            let collisionTileY:number = tile.worldY-this.gp.player.playerY+350;
            
            
            

            switch(direction){
                case "down":{
                    if( this.gp.player.playerX+this.gp.tilesize >= collisionTileX+tile.worldX-800+20&&
                        this.gp.player.playerX <= collisionTileX+this.gp.tilesize+tile.worldX-700-20&&
                        this.gp.player.playerY+this.gp.tilesize+30 >= collisionTileY+tile.worldY-400&&
                        this.gp.player.playerY <= collisionTileY+this.gp.tilesize+tile.worldY-300-80){
                            console.log("collision down!!!");
                            this.gp.collision = true;
                            // if(tile.collisionNum === this.gp.collisionM.doorIndex){
                            //     this.gp.mapState = this.gp.myHouse;
                            //     this.gp.mapsChange = true;
                            // }
                            
        
                        }
                        break;
                }
                
                case "right":{
                    if( this.gp.player.playerX+this.gp.tilesize >= collisionTileX+tile.worldX-800&&
                        this.gp.player.playerX <= collisionTileX+this.gp.tilesize+tile.worldX-700-20&&
                        this.gp.player.playerY+this.gp.tilesize >= collisionTileY+tile.worldY-400+20&&
                        this.gp.player.playerY <= collisionTileY+this.gp.tilesize+tile.worldY-300-80){
                            console.log("collision right!!!");
                            this.gp.collision = true;
                            // if(tile.collisionNum === this.gp.collisionM.doorIndex){
                            //     this.gp.mapState = this.gp.myHouse;
                            //     this.gp.mapsChange = true;
                            // }
        
                        }
                        break;
                }
                case "left":{
                    if( this.gp.player.playerX+this.gp.tilesize >= collisionTileX+tile.worldX-800+20&&
                        this.gp.player.playerX <= collisionTileX+this.gp.tilesize+tile.worldX-700&&
                        this.gp.player.playerY+this.gp.tilesize >= collisionTileY+tile.worldY-400+20&&
                        this.gp.player.playerY <= collisionTileY+this.gp.tilesize+tile.worldY-300-80){
                            console.log("collision left!!!");
                            this.gp.collision = true;
                            // if(tile.collisionNum === this.gp.collisionM.doorIndex){
                            //     this.gp.mapState = this.gp.myHouse;
                            //     this.gp.mapsChange = true;
                            // }
        
                        }
                        break;
                }

                case "up":{
                    if( this.gp.player.playerX+this.gp.tilesize >= collisionTileX+tile.worldX-800+20&&
                        this.gp.player.playerX <= collisionTileX+this.gp.tilesize+tile.worldX-700-20&&
                        this.gp.player.playerY+this.gp.tilesize >= collisionTileY+tile.worldY-400+20&&
                        this.gp.player.playerY+60 <= collisionTileY+this.gp.tilesize+tile.worldY-300){
                            console.log("collision up!!!");
                            this.gp.collision = true;
                            // if(tile.collisionNum === this.gp.collisionM.doorIndex){
                            //     this.gp.mapState = this.gp.myHouse;
                            //     console.log("iatanislfkj")
                            //     this.gp.mapsChange = true;
                            //}
        
                        }
                        break;
                }
            }

            
            
        })


        
    }

    checkCollisionNPC(direction:string):void{
        this.gp.collision = false;
        
        if(this.gp.npc.length >0){
            
            for(let i:number = 0; this.gp.npc.length > i; i++){
                    this.gp.collisionM.collisionArray.forEach((tile)=>{

                    let collisionTileX:number = tile.worldX-this.gp.player.playerX+750;
                    let collisionTileY:number = tile.worldY-this.gp.player.playerY+350;
        
                    let npcX:number = this.gp.npc[i].npcX - this.gp.player.playerX + 750;
                    let npcY:number = this.gp.npc[i].npcY - this.gp.player.playerY + 350
                    
                    
                    
        
                    switch(direction){
                        case "down":{
                            if( npcX+this.gp.tilesize >= collisionTileX+20&&
                                npcX <= collisionTileX+this.gp.tilesize-20&&
                                npcY+this.gp.tilesize >= collisionTileY&&
                                npcY <= collisionTileY+this.gp.tilesize-20){
                                    // console.log("collisionNPC down!!!");
                                    this.gp.collisionNPC = true;
                                    
                
                                }
                                break;
                        }
                        
                        case "right":{
                            if( npcX+this.gp.tilesize >= collisionTileX&&
                                npcX <= collisionTileX+this.gp.tilesize-20&&
                                npcY+this.gp.tilesize >= collisionTileY+20&&
                                npcY <= collisionTileY+this.gp.tilesize-20){
                                    // console.log("collisionNPC right!!!");
                                    this.gp.collisionNPC = true;
                                    
                
                                }
                                break;
                        }
                        case "left":{
                            if( npcX+this.gp.tilesize >= collisionTileX+20&&
                                npcX <= collisionTileX+this.gp.tilesize&&
                                npcY+this.gp.tilesize >= collisionTileY+20&&
                                npcY <= collisionTileY+this.gp.tilesize-20){
                                    // console.log("collisionNPC left!!!");
                                    this.gp.collisionNPC = true;
                                    
                
                                }
                                break;
                        }
        
                        case "up":{
                            if( npcX+this.gp.tilesize >= collisionTileX+20&&
                                npcX <= collisionTileX+this.gp.tilesize-20&&
                                npcY+this.gp.tilesize >= collisionTileY+20&&
                                npcY <= collisionTileY+this.gp.tilesize){
                                    // console.log("collisionNPC up!!!");
                                    this.gp.collisionNPC = true;
                                    
                
                                }
                                break;
                        }
                    }
                })
            }

        }


            
            


        
    }

    CheckCollisionPlayerToEntity(direction:string):number{
        let index:number = 999;
        if(this.gp.npc.length >0){
            for(let i:number = 0; this.gp.npc.length > i; i++){

                let npcX:number = this.gp.npc[i].npcX - this.gp.player.playerX + 750;
                let npcY:number = this.gp.npc[i].npcY - this.gp.player.playerY + 350;
                    

                switch(direction){
                    case "down":{
                        if( this.gp.player.playerX+this.gp.tilesize >= npcX+this.gp.npc[i].npcX-800+20&&
                            this.gp.player.playerX <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= npcY+this.gp.npc[i].npcY-400&&
                            this.gp.player.playerY <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300-80){
                                console.log("collision with NPC down!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                    
                    case "right":{
                        if( this.gp.player.playerX+this.gp.tilesize >= npcX+this.gp.npc[i].npcX-800&&
                            this.gp.player.playerX <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700-100&&
                            this.gp.player.playerY+this.gp.tilesize >= npcY+this.gp.npc[i].npcY-400+20-20&&
                            this.gp.player.playerY <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300-0){
                                console.log("collision with NPC right!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                    case "left":{
                        if( this.gp.player.playerX+this.gp.tilesize >= npcX+this.gp.npc[i].npcX-800+100&&
                            this.gp.player.playerX <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700&&
                            this.gp.player.playerY+this.gp.tilesize >= npcY+this.gp.npc[i].npcY-400+20-20&&
                            this.gp.player.playerY <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300-0){
                                console.log("collision with NPC left!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
    
                    case "up":{
                        if( this.gp.player.playerX+this.gp.tilesize >= npcX+this.gp.npc[i].npcX-800+20&&
                            this.gp.player.playerX <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= npcY+this.gp.npc[i].npcY-400+80&&
                            this.gp.player.playerY-20 <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300){
                                console.log("collision with NPC up!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                }
            }
        }


        return index;
    }
    CheckCollisionEntityToPlayer(direction:string):number{
        let index:number = 999;
        if(this.gp.npc.length >0){
            for(let i:number = 0; this.gp.npc.length > i; i++){

                let npcX:number = this.gp.npc[i].npcX - this.gp.player.playerX + 750;
                let npcY:number = this.gp.npc[i].npcY - this.gp.player.playerY + 350;
                    

                switch(direction){
                    case "down":{
                        if( this.gp.player.playerX+this.gp.tilesize-20 >= npcX+this.gp.npc[i].npcX-800&&
                            this.gp.player.playerX+20 <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700&&
                            this.gp.player.playerY+this.gp.tilesize-50 >= npcY+this.gp.npc[i].npcY-400&&
                            this.gp.player.playerY <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300+40){
                                // console.log("collisionNPC down!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                    
                    case "right":{
                        if( this.gp.player.playerX+this.gp.tilesize-50 >= npcX+this.gp.npc[i].npcX-800&&
                            this.gp.player.playerX <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700&&
                            this.gp.player.playerY+this.gp.tilesize-20 >= npcY+this.gp.npc[i].npcY-400&&
                            this.gp.player.playerY+20 <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300){
                                // console.log("collisionNPC right!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                    case "left":{
                        if( this.gp.player.playerX+this.gp.tilesize >= npcX+this.gp.npc[i].npcX-800&&
                            this.gp.player.playerX+50 <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700&&
                            this.gp.player.playerY+this.gp.tilesize-20 >= npcY+this.gp.npc[i].npcY-400&&
                            this.gp.player.playerY+20 <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300){
                                // console.log("collisionNPC left!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
    
                    case "up":{
                        if( this.gp.player.playerX+this.gp.tilesize-20 >= npcX+this.gp.npc[i].npcX-800&&
                            this.gp.player.playerX+20 <= npcX+this.gp.tilesize+this.gp.npc[i].npcX-700&&
                            this.gp.player.playerY+this.gp.tilesize >= npcY+this.gp.npc[i].npcY-400&&
                            this.gp.player.playerY+40 <= npcY+this.gp.tilesize+this.gp.npc[i].npcY-300){
                                // console.log("collisionNPC up!!!");
                                this.gp.collision = true;
                                this.gp.collisionNPC = true;
                                return i;
            
                            }
                            break;
                    }
                }
            }
        }


        return index;
    }

    CheckCollisionDoors(direction:string):void{
        

        for(let i:number = 0; i<this.gp.doors.length; i++){
            if(this.gp.doors[i].from === this.gp.mapState){

                if(this.gp.doors[i] !== undefined){
                
                let objectX = this.gp.doors[i].x-this.gp.player.playerX+750;
                let objectY = this.gp.doors[i].y-this.gp.player.playerY+350;

                switch(direction){
                    case "down":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.doors[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.doors[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.doors[i].y-400&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.doors[i].y-300-20){
                                
                                console.log("inn")
                                this.gp.mapState = this.gp.doors[i].to;
                                this.gp.mapsChange = true;
            
                            }
                            break;
                    }
                    
                    case "right":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.doors[i].x-800&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.doors[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.doors[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.doors[i].y-300-20){
                                console.log("inn")
                                this.gp.mapState = this.gp.doors[i].to;
                                this.gp.mapsChange = true;
                            }
                            break;
                    }
                    case "left":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.doors[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.doors[i].x-700&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.doors[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.doors[i].y-300-20){
                                
                                console.log("inn")
                                this.gp.mapState = this.gp.doors[i].to;
                                this.gp.mapsChange = true;
                            }
                            break;
                    }
    
                    case "up":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.doors[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.doors[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.doors[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.doors[i].y-300){
                                
                                console.log("inn")
                                this.gp.mapState = this.gp.doors[i].to;
                                this.gp.mapsChange = true;
            
                            }
                            break;
                    }
                }

            }
            }
        }
        

    }
    CheckCollisionBooks(direction:string):number{
        let Index = 999;

        for(let i:number = 0; i<this.gp.books.length; i++){
            if(this.gp.books[i].mapstate === this.gp.mapState){

                if(this.gp.books[i] !== undefined){
                
                let objectX = this.gp.books[i].x-this.gp.player.playerX+750;
                let objectY = this.gp.books[i].y-this.gp.player.playerY+350;

                switch(direction){
                    case "down":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.books[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.books[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.books[i].y-400&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.books[i].y-300-20){
                                console.log("books!!!!!!")
                                // if(this.gp.books[i].jumpable)window.location.href = "/book";
                                // if(this.gp.books[i].speakable)
                                return i;
                            }
                            break;
                    }
                    
                    case "right":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.books[i].x-800&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.books[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.books[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.books[i].y-300-20){
                                console.log("books!!!!!!")
                                // if(this.gp.books[i].jumpable)window.location.href = "/book";
                                return i;
                            }
                            break;
                    }
                    case "left":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.books[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.books[i].x-700&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.books[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.books[i].y-300-20){
                                console.log("books!!!!!!")
                                // if(this.gp.books[i].jumpable)window.location.href = "/book";
                                return i;
                            }
                            break;
                    }
    
                    case "up":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.books[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.books[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.books[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.books[i].y-300){
                                console.log("books!!!!!!")
                                // if(this.gp.books[i].jumpable)window.location.href = "/book";
                                return i;
                            }
                            break;
                    }
                }

            }
            }
        }
        return Index;

    }
    CheckCollisionObject(direction:string):number{
        let index:number = 999;

        for(let i:number = 0; i<this.gp.asset.itemsOnMap.length; i++){
                if(this.gp.asset.itemsOnMap[i] !== undefined){

                let objectX = this.gp.asset.itemsOnMap[i].x-this.gp.player.playerX+750;
                let objectY = this.gp.asset.itemsOnMap[i].y-this.gp.player.playerY+350;

                switch(direction){
                    case "down":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.asset.itemsOnMap[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.asset.itemsOnMap[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.asset.itemsOnMap[i].y-400&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.asset.itemsOnMap[i].y-300-20){
                               
                                if(this.gp.asset.itemsOnMap[i].collision === true){

                                    this.gp.collision = true;
                                }

                                return i;
                                
            
                            }
                            break;
                    }
                    
                    case "right":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.asset.itemsOnMap[i].x-800&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.asset.itemsOnMap[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.asset.itemsOnMap[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.asset.itemsOnMap[i].y-300-20){
                                if(this.gp.asset.itemsOnMap[i].collision === true){

                                    this.gp.collision = true;
                                }

                                return i;
                            }
                            break;
                    }
                    case "left":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.asset.itemsOnMap[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.asset.itemsOnMap[i].x-700&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.asset.itemsOnMap[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.asset.itemsOnMap[i].y-300-20){
                                if(this.gp.asset.itemsOnMap[i].collision === true){

                                    this.gp.collision = true;
                                }

                                return i;
                            }
                            break;
                    }
    
                    case "up":{
                        if( this.gp.player.playerX+this.gp.tilesize >= objectX+this.gp.asset.itemsOnMap[i].x-800+20&&
                            this.gp.player.playerX <= objectX+this.gp.tilesize+this.gp.asset.itemsOnMap[i].x-700-20&&
                            this.gp.player.playerY+this.gp.tilesize >= objectY+this.gp.asset.itemsOnMap[i].y-400+20&&
                            this.gp.player.playerY <= objectY+this.gp.tilesize+this.gp.asset.itemsOnMap[i].y-300){
                                if(this.gp.asset.itemsOnMap[i].collision === true){

                                    this.gp.collision = true;
                                }

                                return i;
            
                            }
                            break;
                    }
                }

            }
        }
        return index;

    }
    
}