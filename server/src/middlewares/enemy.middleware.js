const Enemy = require("../model/Enemy")

const enemyFetch = async()=>{
    let allenemy = await Enemy.find();
    let randomNum = Math.floor(Math.random()*allenemy.length)
    
    return allenemy[randomNum]
}

module.exports = {
    enemyFetch
}