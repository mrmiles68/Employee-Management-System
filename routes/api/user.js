const router = require("express").router();
const user = require("../../models.use");

router.get("/"), (req,res)  => {
    

};

router.get("/"), async, (req,res)  => {
    
    const userData = await user.findAll();
    res.json(userData);

};

module.exports = router;

