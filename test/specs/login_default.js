// auth/standard_login.js
var expect = require('chai').expect
import LoginPage from '../../pages/login.page'

describe('login page', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('foo')
        LoginPage.password.setValue('bar')
        LoginPage.submit()
        expect(LoginPage.loginErr.getText()).to.contain("Epic sadface: Username and password do not match any user in this service")
    })

    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        // expect to find logo or new url or whatever after logging in
    })
})