const router = require("express").Router();

router.get("/", require("../controller/indexController.js"));

module.exports = router;
