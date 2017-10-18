//引入http模块
var  http = require("http")
//引入http模块
var  fs = require("fs")
//引入http模块
http.createServer(function(req,res){
	//设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//写响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	//设置路由
	switch(req.url){
		case "/1":
		//读取文件
		fs.readFile("1.json","utf-8",function(err,data){
			if(!err){
				res.end(data)
			}
		})
		break;
		case "/2":
		//读取文件
		fs.readFile("2.json","utf-8",function(err,data){
			if(!err){
				res.end(data)
			}
		})
		break;
		case "/3":
		//读取文件
		fs.readFile("3.json","utf-8",function(err,data){
			if(!err){
				res.end(data)
			}
		})
		break;
		case "/4":
		//读取文件
		fs.readFile("4.json","utf-8",function(err,data){
			if(!err){
				res.end(data)
			}
		})
		break;
		case "/5":
		//读取文件
		fs.readFile("5.json","utf-8",function(err,data){
			if(!err){
				res.end(data)
			}
		})
		break;
	}
	
	
}).listen(1212,function(){
	//引入http模块
	console.log("启动成功")
})
