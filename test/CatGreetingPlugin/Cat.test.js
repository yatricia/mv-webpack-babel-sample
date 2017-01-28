import { expect } from 'chai'
const Cat = require(__dirname.replace('test', 'src') +'/Cat.js').default

describe('Cat', function() {
    let cat, name, message
    beforeEach(function() {
        name = 'ねこのなまえ'
        message = 'ねこのメッセージ'
        cat = new Cat(name, message)
    })

    describe('constructor', function() {
        it('渡した名前が設定される', function() {
            expect(cat.name).to.eq(name)
        })

        it('渡したメッセージが設定される', function() {
            expect(cat.message).to.eq(message)
        })

        describe('メッセージを渡さなかった場合', function() {
            it('メッセージとして"にゃー"が設定される', function() {
                cat = new Cat(name)
                expect(cat.message).to.eq('にゃー')
            })
        })
    })

    describe('#greet', function() {
        it('名前とメッセージに応じた挨拶を返す', function() {
            expect(cat.greet()).to.eq(`${name}: ${message}`)
        })
    })
})
