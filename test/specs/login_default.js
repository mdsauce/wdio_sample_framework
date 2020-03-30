// standard_login.js
import LoginPage from '../../pages/login.page'
import InventoryPage from '../../pages/inventory.page'

describe('login page', () => {
    it('should deny access with wrong creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('foo')
        LoginPage.password.setValue('bar')
        LoginPage.submit()
        expect(LoginPage.loginErr).toHaveTextContaining("username and password do not match", { ignoreCase: true })
    })

    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(InventoryPage.logo).toBePresent()
    })
})