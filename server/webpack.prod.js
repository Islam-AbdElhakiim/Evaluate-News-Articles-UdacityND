const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "../client/index.js",
	output: {
		libraryTarget: "var",
		library: "Client",
	},
	mode: "production",
	module: {
		rules: [
			{
				//babel loader.
				test: "/.js$/",

				exclude: /node_modules/,

				loader: "babel-loader",
			},
			{
				//style loader.
				test: /\.scss$/,

				use: [MiniCssExtPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "../client/view/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtPlugin({filename: "[name].css"}),
		new WorkboxPlugin.GenerateSW(),
	],
	optimization: {
		minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
};
