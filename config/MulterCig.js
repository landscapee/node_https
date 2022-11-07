const multer = require("multer")
const storage =  multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(1,req, file)
        cb(null, 'src/upload') //将上传的文件放到哪个文件夹中去  字符串参数是路径
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)  //这个函数给我们的文件起名字
    }
})

const uplaod = multer({ storage: storage })

module.exports = uplaod