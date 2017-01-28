const TkoolMvCommentPlugin = require('./lib/tkool-mv-comment-plugin.js')

/*
 * src以下のディレクトリがそれぞれプラグインにあたるものとしてビルドする
 * 各ディレクトリの下にある同名のファイルをエントリーポイントとする
 * 例)
 * src
 * ├ HogePlugin
 * │ ├ HogePlugin.js
 * │ └（HogePluginからimportされるファイルなど）
 * └ HugaPlugin
 * 　 ├ HugaPlugin.js
 *  　└（HugaPluginからimportされるファイルなど）
 */
const fs = require("fs");
const inputPath = __dirname + "/src/";
const outputPath = __dirname + "/mv/js/plugins/";

const entries = {};
const fileNames = fs.readdirSync(inputPath);
fileNames.forEach(function(name) {
  const path = inputPath + name;
  if(fs.statSync(path).isDirectory()) {
    entries[name] = path + "/" + name;
  }
});

module.exports = {
  entry: entries,
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    new TkoolMvCommentPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
