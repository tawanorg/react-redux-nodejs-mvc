var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// devtool: "cheap-module-source-map", // production
	devtool: "eval", // development
	context: __dirname,
	entry: ["babel-polyfill", "whatwg-fetch", "./src/client/app.js"],
	output: {
		path: path.join(__dirname, "dist/"),
		filename: 'bundle-[hash].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
		new HtmlWebpackPlugin({
			inject: true,
			template: './src/templates/index.html',
		}),
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  }),
	],
	module: {
		loaders: [
			{ test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name][hash:base64:5]'
			},
			{ test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react','es2015']} },
			{ test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000" },
		]
	},
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
};
