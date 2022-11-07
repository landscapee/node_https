const express = require("express")
const testCtrl = require("../controller/testCtrl")
const upload = require("../config/MulterCig")

const router = express.Router()

 router.get("/json",testCtrl.json)
router.get("/file",testCtrl.file)
router.post("/files",upload.array('myfile1',9),testCtrl.files)




module.exports=router