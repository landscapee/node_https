const express = require("express")
 const pageCtrl = require("../controller/pageCtrl")
 const smsCtrl = require("../controller/smsCtrl")
const uploadFileCtrl = require("../controller/uploadFileCtrl")
const upload = require("../config/MulterCig")
const file = require("../controller/file")
const router = express.Router()

router.get("/sms",pageCtrl.sms)
router.get("/redirect",pageCtrl.redirect)

 router.post("/sms.do",smsCtrl.smsPhone)
 router.post("/getImg",file.getImg)
router.post("/verifyCode.do",smsCtrl.verifyCode)

// =================================文件上传
// upload.single后所接的字符串 代表前端input的name值
router.post("/uploadFile.do",upload.single('myfile'),uploadFileCtrl.upload)
router.post("/ajax",upload.single('myfile'),uploadFileCtrl.upload)

router.post("/uploadFiles.do",upload.array('myfile1',9),uploadFileCtrl.uploadFiles)




module.exports=router
