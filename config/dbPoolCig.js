const mysql = require("mysql")
const dbpool = {
    pool:{},
    create(){
       this.pool =  mysql.createPool({
           host:"localhost",
           port:"3306",
           user:"root",
           password:"root",
           database:"demo178"
       })
    },
    connect(sql,arr,fn){
        this.pool.getConnection(function (err, connection) {
            connection.query(sql,arr,fn)
            connection.release()
        })
    }
}
// 这个对象是我创建的一个公共对象  该对象里面有连接池对象  创建连接池的方法 连接的方法

dbpool.create()
module.exports = dbpool