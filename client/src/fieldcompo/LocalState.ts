export const getItemFromLocalState=(itemName:string)=>{
    const item = localStorage.getItem(itemName);
    return item ? JSON.parse(item):undefined
}