import { GamePanel } from "./GamePanel.js";
export class Doors{
    gp:GamePanel;
    x: number;
    y:number;
    imageName:string;
    name: string;
    collision: boolean;
    from: number;
    to: number;
    
    

    constructor(gp:GamePanel, name:string, x:number, y:number, imageName:string, collision:boolean, from:number, to:number){

        this.gp=gp;
        this.name = name;
        this.x = x;
        this.y = y;
        this.imageName = imageName;
        this.collision = collision;
        this.from = from;
        this.to = to;
    }

    draw(c:CanvasRenderingContext2D):void{
        if(this.gp.mapState === this.from){

            let image = new Image;
            image.src = this.imageName;
            
            c.fillStyle = "rgba(0,0,0,0.1)";

            let objectX:number = this.x - this.gp.player.playerX+750;
            let objectY:number = this.y - this.gp.player.playerY+350;
            
            // c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
            c.fillRect(objectX, objectY, this.gp.tilesize, this.gp.tilesize)
        }
    }

    
    
    
}