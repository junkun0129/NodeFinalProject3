import { GamePanel } from "./GamePanel.js";
import { CollisionTile } from "./CollisionTile.js";
import { Player } from "./Player.js";
export class CollisionMap{
    
    gp:GamePanel;
    public collisionIndex = 594;
    public doorIndex = 3597;
    public collisionArray:CollisionTile[] = [];
    constructor(gp:GamePanel){
       this.gp = gp;
        

        
       
    }

    mapArrayCreate():void{
        if(this.gp.mapsChange){

            const collisionMap = [];
    
            for(let i = 0; i<this.gp.collisionDatas[this.gp.mapState].length; i += 60){
                collisionMap.push(this.gp.collisionDatas[this.gp.mapState].slice(i,60+i));
            }
    
            const collisionMapNext: CollisionTile[] = [];
           
            
    
            collisionMap.forEach((row, i)=>{
                row.forEach((num, j)=>{
                    if(num === this.collisionIndex||num === this.doorIndex){
    
                        collisionMapNext.push(new CollisionTile(i, j, num));
                    }

                    
                    
                })
            })
    
            this.collisionArray = collisionMapNext;
            this.gp.mapsChange = false;

        }
        
    }

    draw(c:CanvasRenderingContext2D){
        this.collisionArray.forEach((tile)=>{
            
            let collisionTileX:number = tile.worldX-this.gp.player.playerX+750;
            let collisionTileY:number = tile.worldY-this.gp.player.playerY+350;
            if(tile.collisionNum === this.collisionIndex){
                c.fillStyle = "rgb(0,0,0,0)";
            }
            // else if(tile.collisionNum === this.doorIndex){
            //     c.fillStyle = "rgb(200,200,200)";   
            // }
            c.fillRect(collisionTileX, collisionTileY, this.gp.tilesize, this.gp.tilesize);
            
        })


        

    }
}