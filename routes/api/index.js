const router = require("express").router();
const user = require("./user");
router.use("/user",user);

module.exports = router;

