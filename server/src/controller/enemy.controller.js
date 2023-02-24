const {
    enemyFetch
} = require("../middlewares/enemy.middleware")

const createEnemyController = async(req, res, next)=>{
    const enemy1 = await enemyFetch()
    const enemy2 = await enemyFetch()
    const enemy3 = await enemyFetch()
    const enemies = {enemy1, enemy2, enemy3}
    return res.json(enemies)
}

module.exports = {
    createEnemyController
}