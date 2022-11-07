const dbpool = require("../config/dbPoolCig")
module.exports = {
    // 使用连接池连接数据库
    stuDao(sql,arr,fn) {
        return new Promise(function (resolve, reject) {
            dbpool.connect(sql, arr, (err,data)=>{
                if(data){
                    fn(err,data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}
