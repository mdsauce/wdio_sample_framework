// locked_user.js
var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import InventoryPage from '../../pages/inventory.page'

describe('problem users', () => {
    it('should be locked out', () => {
        LoginPage.open()
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.lockedOut.getText()).to.contain("this user has been locked out.")
    })
})