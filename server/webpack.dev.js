const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkPluginBox = require("workbox-webpack-plugin");

module.exports = {
	entry: "../client/index.js",
	output: {
		library: "Client",
		libraryTarget: "var",
	},
	mode: "development",
	devtool: "source-map",
	stats: "minimal",
	module: {
		rules: [
			{
				//babel loader.
				test: "/.js$/",

				exclude: /node_modules/,

				loader: "babel-loader",
			},
			{
				//babel loader.
				test: "/json$/",

				exclude: /node_modules/,

				loader: "babel-loader",
			},
			{
				//style loader.
				test: /\.scss$/,

				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "../client/view/index.html",
			filename: "./index.html",
		}),
		new WorkPluginBox.GenerateSW(),
	],
};
