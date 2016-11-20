var path = require('path');

module.exports = {
	context: path.resolve('assets/js'),
	entry: ["./app"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/',
		filename:  "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(png|jpg|ttf|eot|svg|woff|woff2)$/,
				exclude: /node_modules/,
				loader: "url-loader?limit=10000"
			},
			{
		    test: /\.js$/,         
		    exclude: /node_modules/,
		    loader: "babel",
		    query:
		      {
		        presets:['es2015', 'react'],
		        plugins:['transform-decorators-legacy']
		      }
			},
			{
		    test: /\.json$/,        
		    loader: "json-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
}