module.exports = {
	entry: [__dirname +"/src/main.js",
		__dirname +"/src/index.js"
	],
	output:{
		path: __dirname + "/dist",//output dir
		filename: "bundle.js" //file name
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
