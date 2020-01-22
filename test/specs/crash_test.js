// crash_test.js
var expect = require('chai').expect


describe('Browser should NOT crash', () => {
    it('after running a few searches', () => {
        for (let i = 0; i < 8; i++) {
            browser.url("https://google.com/")
            let search_input = $(".gLFyf")
            search_input.waitForDisplayed()
            search_input.click()
            search_input.setValue('this should NOT crash '+ i)
            browser.keys("\uE007")
        }
    },3)
})