module.exports = {
	devtool: 'eval-source-map',
	entry: [__dirname +"/src/main.js",
		__dirname +"/src/index.js"
	],
	output:{
		path: __dirname + "/dist",//output dir
		filename: "bundle.js" //file name
	},
	devServer:{
		contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
		devtool: 'eval',
		hot: true,        //自动刷新
		inline: true,    
		port: 8090        
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:"style!css"
			}
		]
	}, 
}
