import { GamePanel } from "./GamePanel";
export class Book{
    gp:GamePanel
    imageName:string;
    x:number;
    y:number;
    mapstate:number;

    public jumpable:boolean = false;
    public speakable:boolean = false;

    public dialogs:string[] = ["a", "k", "k", "d"];
    public dialogIndex:number = 0;
    



    constructor(gp:GamePanel, imageName:string, x:number, y:number, mapstate:number){

        this.gp = gp;
        this.imageName = imageName
        this.x = x;
        this.y = y;
        this.mapstate = mapstate;
        
    }

    speak():void{
        const maxDialogIndex = this.dialogs.length;

        if(this.dialogIndex === maxDialogIndex){
            this.gp.gameState = this.gp.fieldScene;
            this.dialogIndex =0;
        }
        this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
    
    }
    
    
    
    draw(c:CanvasRenderingContext2D):void{
        if(this.gp.mapState === this.mapstate){

            let image = new Image;
            image.src = this.imageName;
            
            let objectX:number = this.x - this.gp.player.playerX+750;
            let objectY:number = this.y - this.gp.player.playerY+350;
            
            c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
        }
    }
}