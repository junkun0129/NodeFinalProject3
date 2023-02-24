const router = require("express").Router();
const controller = require("../controller/enemy.controller")
router.get(("/create"), controller.createEnemyController)

module.exports = router