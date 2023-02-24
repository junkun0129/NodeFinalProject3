import { GamePanel } from "../GamePanel.js";
import { Entity } from "./Entity.js";

export class Npc extends Entity{
    public gp: GamePanel;

    
    

    constructor(gp:GamePanel){
        super(gp);
        this.gp = gp;
        

    }

    
    speak(): void {
        // let rock = this.gp.asset.itemsOnMap.findIndex(array => array.name === "rock");

        // if(rock !== -1){
            
            
        //     if(this.dialogIndex === 4){
                
        //         this.gp.gameState = this.gp.fieldScene;
        //         this.dialogIndex = 0;
        //     }

        //     this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
        // }
        // if(rock === -1){
        //     if(this.dialogIndex === 0){
        //         this.dialogIndex = 5;
        //     }
           
        //     if(this.dialogIndex === 10){
                
        //         this.gp.gameState = this.gp.fieldScene;
        //         this.dialogIndex = 0;
        //     }
        //     this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
        // }

        const maxDialogIndex = this.dialogs.length;

        if(this.dialogIndex === maxDialogIndex){
            this.gp.gameState = this.gp.fieldScene;
            this.dialogIndex =0;
        }
        this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
    
       
    }

    


}