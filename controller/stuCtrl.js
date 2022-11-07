const stuDao = require("../dao/stuDao")
module.exports = {
    getData(req,resp){
        // 需要使用dao
        stuDao.stuDao("select * from t_student",[],(err,data)=>{
            if(data){
                resp.send(data)
            }
        })
    }
}