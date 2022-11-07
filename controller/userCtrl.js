const userDao = require("../dao/userDao")
const pageCtrl = require("./pageCtrl")
module.exports = {
    login(req,resp){
        let {userName,pwd} = req.body
        let pageUrl = req.headers.referer.split("/")
        pageUrl = pageUrl[pageUrl.length-1]
        console.log(pageUrl)
        userDao.user("select * from t_user where uname = ? and pwd = ?",[userName,pwd],function (err, data) {
            if(data.length>0){
                // 登陆成功
                let user = {
                    dataType:true,
                    userName:data[0].uname
                }
                req.session.data = user
                resp.render(pageUrl,{data:user})
            }else {
                // 登陆失败
            }
        })
    }
}