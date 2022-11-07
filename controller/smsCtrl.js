const sms = require("leancloud-storage")
const app_id = "DTr8ilyHJpWwjpfsOXFownRN-gzGzoHsz"
const app_key = "XKnEPX7jqNwRX3wornbUqcVa"
sms.init({
    appId:app_id,
    appKey:app_key
})
module.exports = {
    smsPhone(req,resp){
        // 拿到手机号
        let phone = req.body
        console.log(phone.a)
        resp.json({a:2})
        return
        // 给第三方发送
        sms.Cloud.requestSmsCode({
            mobilePhoneNumber:phone,
            name:"况宏达按摩",
            code:"验证码",
            ttl:1,
            sign:"CountWED"
        }).then(function (data) {
            // 短信发送成功
            resp.send("短信发送成功")
        }).catch(function (err) {
            // 短信发送失败
            console.log(err)
            resp.send("短信发送失败")
        })
    },
    verifyCode(req,resp){
        let {code,phone} = req.body
        sms.Cloud.verifySmsCode(code,phone).then(function () {
            // 验证成功
            resp.send("短信验证成功")
        }).catch(function (err) {
            //验证失败
            resp.send("验证码输入错误")
        })
    }
}