export class LSManager{

    setToStrage(name:string, data:any):void{
        localStorage.setItem(name, JSON.stringify(data));
    }

    getStrage(name:string){
        JSON.parse(localStorage.getItem(name)||"[]");
    }
}