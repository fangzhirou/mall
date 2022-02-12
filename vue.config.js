module.exports={
	devServer:{
		host:'localhost',
		port:8080,
		proxy:{
			'/activity':{//是一个拦截
				target:'https://www.imooc.com',
				changeOrigin:true,
				pathRewrite:{
					'/activity':'/activity'
				}
			}
		}

	}
}