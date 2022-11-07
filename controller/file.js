const stuDao = require("../dao/stuDao")
const userDao = require("../dao/userDao")
module.exports={
    index(req,resp){
        if(!req.session.data){
            var user = {
                dataType:false,
                userName:undefined
            }
        }else{
            var user = {
                dataType:req.session.data.dataType,
                userName:req.session.data.userName
            }
        }
        resp.render("index",{data:user})
    },
    goodsList(req,resp){
        // 这个页面也要有data(是否登录的data)
        if(!req.session.data){
            var user = {
                dataType:false,
                userName:undefined
            }
        }else{
            var user = {
                dataType:req.session.data.dataType,
                userName:req.session.data.userName
            }
        }
        // 下面goodslist的数据就是商品罗列里面需要的数据
        userDao.goodsList().then(function (connection) {
            connection.query('select * from goods',[]).then(function (data) {
                resp.render("views/goods_list",{data:user,goodsList:data})
            }).catch(function (err) {
                // 查询表发生的错误
            })
        }).catch(function (err) {
            // 这个catch是连接数据发生的错误
        })
    },
    goodsDetail(req,resp){
        if(!req.session.data){
            var user = {
                dataType:false,
                userName:undefined
            }
        }else{
            var user = {
                dataType:req.session.data.dataType,
                userName:req.session.data.userName
            }
        }
        let goodsId = req.query.id
        console.log(goodsId)
        // 通过id去找到 这个商品的详细信息并将数据返回页面
        // resp.render("views/goods_detail",{data:user,goodsDetail:查询后的data})
        resp.render("views/goods_detail",{data:user})
    },
    sms(req,resp){
        resp.json( {name:2})
    },
    getImg(req,resp){
        resp.json( {name:2})
    }
}