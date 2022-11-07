const dbpool = require("../config/dbPoolCig")
const pool = require("../config/promisPool")
module.exports = {
    // 使用连接池连接数据库
    user(sql,arr,fn) {
        dbpool.connect(sql, arr, (err,data)=>{
            fn(err,data)
        })
    },
    goodsList(){
        return pool.getConnection()
    }
}