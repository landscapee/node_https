const userDao = require("../dao/userDao")
const fs = require("fs")

const path = require('path');
module.exports={

    json(req,resp){
        console.log(1234);
        resp.json( {name:2})
    },
    file(req,res){
         console.log(req.header.contentType);
         var src="../dist1/img/1.jpg";
           src="../dist1/file/teplate.docx";
        var f = fs.createReadStream(path.resolve(__dirname, src));
        res.writeHead(200, {
            'Content-Type': 'application/force-download',
            'Content-Disposition': 'attachment; filename=1.docx'
        });
        console.log(222);
        f.pipe(res);
    },
    files(req,resp){


    }
}