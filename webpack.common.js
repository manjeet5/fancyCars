const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: __dirname + '/src/index'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query  :{
					presets:['react','env','stage-2'],

				}
			},
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-url-loader',
					options: {}
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
				options: {
					mimetype: 'image/png',
					limit: 8192
				},
			},

		]
	},

	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			favicon: 'html/favicon.ico',
			title:'FancyCars',
			template: './html/index.html',
			inject: 'body'
		})
	],


};
