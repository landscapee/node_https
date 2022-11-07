const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const session = require("express-session")
const cookie = require("cookie-parser")
const indexRouter = require("./router/indexRouter")
const testRouter = require("./router/testRouter")
const fs = require("fs")
const path = require('path');
const io = require('nodejs-websocket')
const HTTPS =require('https')

const app = express()
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type,Authorization");

    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

app.use(logger("dev"))
app.use(cookie())
app.use(session({
    name: "demo178",
    secret: "1234",
    resave: true,
    rolling: true,
    cookie: {maxAge: 60000},
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(indexRouter)
app.use(testRouter)
// app.use(express.static(path.resolve(__dirname, './build')))
app.use(express.static(path.resolve(__dirname, './dist1')))
//history  使用 connect-history-api-fallback 这个中间件。
// var history = require('connect-history-api-fallback');
// app.use(history)
let map={}
var options = {
    secure:true,
    key: fs.readFileSync(process.cwd()+'/private.pem'),
    cert: fs.readFileSync(process.cwd()+'/file.crt'),
    passphrase:'oet121314'
};
console.log(options);
io.createServer(connection => {
    let params= connection.path.split('=')[1]||''
    console.log('new connection...', connection.headers.origin,params)

    //处理客户端发送过来的消息
if(map[connection.headers.origin+params]){
    map[connection.headers.origin+params].close()
}
    map[connection.headers.origin+params]=connection
    connection.on("text", function (data) {
        console.log("接收到的客户端消息:" + data);
         for(let key in map){
             if(connection.headers.origin!=key){
                 map[key]&& map[key].sendText(data)
             }
         }
        //监听关闭
        connection.on("close", function (code, reason) {
            console.log("Connection closed")
            delete map[connection.headers.origin]
        })
        //监听异常
        connection.on("error", () => {
            delete map[connection.headers.origin]
            console.log('服务异常关闭...')
        })
    })
}).listen(3000)


app.listen(6788, () => {
    console.log("服务器启动......")
})
HTTPS.createServer(options,app).listen('5555')


