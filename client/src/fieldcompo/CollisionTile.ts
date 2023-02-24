//import { GamePanel } from "./GamePanel.js";
export class CollisionTile{
    public worldX:number;
    public worldY:number;
    public collisionNum:number;

    public originalTilesize:number = 32;
    public scale:number = 2;
    public tilesize:number = this.originalTilesize*this.scale;

    //public gp:GamePanel = new GamePanel;

    constructor(i:number, j:number, collisionNum:number){
        this.worldX = j*this.tilesize;
        this.worldY = i*this.tilesize;

        this.collisionNum = collisionNum;
        
    }

    // draw():void{
    //     this.gp.c.fillStyle = "red";
    //     this.gp.c.fillRect(this.worldX, this.worldY, this.gp.tilesize, this.gp.tilesize);
    // }
}