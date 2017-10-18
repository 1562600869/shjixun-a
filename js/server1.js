//获取http模块
var  http = require("http");
//引入文件模块
var  fs  =require("fs");
//创建服务器
http.createServer(function(req,res){
	//设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//写响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	//根据不同的请求url去提供不同数据
	// 请求url  req.url
	//console.log(req.url)
	//判断 switch
	
		fs.readFile("index1.txt","utf8",function(err,data){
			if(err){
				throw err
			}
			res.end(data)
		})
	
	
}).listen(5757,function(){
	console.log("启动成功")
})
