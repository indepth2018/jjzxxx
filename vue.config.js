const path = require("path");
//代码混淆压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//打包分析
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;

let appConfig = {};
let lang = process.argv.splice(5)[1],
	isEnglish = lang == "en";

module.exports = {
	//基本路径，缺少的话 index.html打开是空白
	baseUrl: "./",
	//输出文件目录
	// outputDir: "dist",
	// // eslint-loader 是否在保存的时候检查
	// lintOnSave: true,
	// //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	// assetsDir: "static",

	chainWebpack: config => {
		// if (process.env.NODE_ENV == "production") {
		//  //压缩混淆
		//  config.plugin("uglify").use(UglifyJsPlugin, [
		//      {
		//          uglifyOptions: {
		//              compress: {
		//                  warnings: false,
		//                  drop_console: true,
		//                  drop_debugger: true
		//              },
		//              mangle: {
		//                  reserved: require("./produce/reserved")
		//              }
		//          },
		//          sourceMap: true,
		//          parallel: true
		//      }
		//  ]);
		// }
		// //打包分析
		// config.plugin("uglify").use(BundleAnalyzerPlugin, [
		//  {
		//      analyzerMode: "server",
		//      analyzerHost: "localhost"
		//  }
		// ]);
		// 将图片内联;
		config.module
			.rule("images")
			.use("url-loader")
			.loader("url-loader")
			.tap(options => {
				//图片小于10k就转为base64放入js中
				options.limit = 102400;
				return options;
			});
		//在单文件组件中支持<i18n>标签
		// config.module
		//  .rule("i18n")
		//  .resourceQuery(/blockType=i18n/)
		//  // .type("javascript/auto")
		//  .use("i18n")
		//  .loader("@kazupon/vue-i18n-loader")
		//  .end();
	},
	devServer: {
		port: 3000
	}
};
