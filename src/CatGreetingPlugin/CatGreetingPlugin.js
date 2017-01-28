//=============================================================================
// CatGreetingPlugin.js
//=============================================================================

/*:
 * @plugindesc 猫が挨拶してくれるプラグイン
 * @author betto
 *
 * @help
 *
 * プラグインコマンド:
 *   CatGreet id # id番目の猫が挨拶する(idは1オリジン)
 */
/* globals Game_Interpreter, $gameMessage */
import Cat from './Cat'

// 猫のリスト
const cats = [
    new Cat('たま'),
    new Cat('シロ', 'みゃ～'),
    new Cat('クロ', '……')
]

// プラグインコマンドの登録
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = (command, args) => {
    _Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'CatGreet') {
        $gameMessage.add(cats[args - 1].greet())
    }
}
