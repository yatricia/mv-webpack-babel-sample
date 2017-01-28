'use strict'
var ConcatSource = require('webpack-core/lib/ConcatSource')

// RPGツクールMVのプラグイン用のコメントをファイルの先頭に移動する
class TkoolMvCommentPlugin {
    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            for (let key of Object.keys(compilation.assets)) {
                const source = compilation.assets[key].source()
                compilation.assets[key] = new ConcatSource(...this.splitHeader(source), '')
            }

            callback()
        })
    }

    // sourceを受け取ってプラグインコメントを抜き取る
    // 戻り値: header 抜き取ったプラグインコメント
    //         source 元のsourceからプラグインコメントを削除したもの
    splitHeader(source) {
        const header = source.match(/\/\*:([\s\S]+?)\*\//gm).join('\n').replace(/^\t/gm, '') + '\n'
        source = source.replace(/\/\*:([\s\S]+?)\*\//gm, '')
        return [header, source]
    }
}

module.exports = TkoolMvCommentPlugin
