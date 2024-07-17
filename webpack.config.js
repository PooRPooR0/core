const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {
	mode: 'production',
	entry: {
		app: path.join(__dirname, 'src', 'index.tsx')
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@src': [
				path.resolve(__dirname, 'src'),
				path.resolve(__dirname, 'packages/custom-module'),
				path.resolve(__dirname, 'packages/core')
			],
			'@custom-module': path.resolve(__dirname, 'packages/custom-module'),
			'@core': path.resolve(__dirname, 'packages/core'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(jsx|js)$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'packages')
				],
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								"targets": "defaults"
							}],
							'@babel/preset-react'
						]
					}
				}]
			},
			{
				test: cssRegex,
				exclude: cssModuleRegex,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						},
					},
				],
			},
			{
				test: cssModuleRegex,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				]
				/*
				* {
								importLoaders: 1,
								sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
								modules: {
									getLocalIdent: getCSSModuleLocalIdent,
								},
							}
				* */
			}
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html')
		}),
		new MiniCssExtractPlugin(),
	],
}
