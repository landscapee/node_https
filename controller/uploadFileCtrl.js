const path = require('path');

module.exports ={
    upload(req,resp){
        const body =  'ssssssssssss'
        console.log(req,body)

        // 将图片url写入数据库
         resp.send(`upload/${req.file}`)
    },
    uploadFiles(req,resp){
        let imgArr = []
        console.log(req.files)
        req.files.forEach((item)=>{
            imgArr.push(item.filename)
        })
        // 拿到上传的所有文件名  并将文件名写入数据库
        console.log(imgArr)
        // 循环添加这个数组邻面src  //一定要使用promise
        resp.send("文件上传成功")
    },
    uploadFiles2(req,resp){
        console.log(req.body)
        let imgArr = []
        req.files.forEach((item)=>{
            imgArr.push(item.filename)
        })
        // 拿到上传的所有文件名  并将文件名写入数据库
        console.log(imgArr)
        // 循环添加这个数组邻面src  //一定要使用promise
        resp.send("文件上传成功")
    }
}