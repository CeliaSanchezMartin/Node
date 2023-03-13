const {Router} = require ("express");
const router = Router();
const userCtrl = require("../controller/user.controller");

router.get("/", userCtrl.getStart);

router.get("/usuario", userCtrl.getUser);

router.get("/usuario/:id", userCtrl.getUserParams);

router.post("/usuario", usersCtrl.postUser);

router.put("/usuario", userCtrl.putUser);

router.delete("/usuario", usersCtrl.deleteUser);

module.exports = router