/**
 * 1匹の猫を表現するクラス
 */
export default class Cat {
    /**
     * nameとmessageを持つ猫を生成する
     * @param {string} name 新しい猫の名前
     * @param {string} [message = 'にゃー'] 新しい猫の挨拶メッセージ
     */
    constructor(name, message = 'にゃー') {
        /**
         * 猫の名前
         * @type {string}
         */
        this.name = name
        /**
         * 猫の挨拶メッセージ
         * @type {string}
         */
        this.message = message
    }

    /**
     * 挨拶文字列を得る
     * @return {string} 挨拶文字列
     */
    greet() {
        return `${this.name}: ${this.message}`
    }
}
