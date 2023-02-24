const router = require("express").Router();
const controller = require("../controller/auth.controller")

router.post("/signup", controller.signUpController);
router.post("/signin", controller.signInController);
// router.get("/jikken", (req, res, next)=>{
//     res.send("jikken")
// })
module.exports = router;