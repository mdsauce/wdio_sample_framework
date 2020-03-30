// locked_user.js
import LoginPage from '../../pages/login.page'

describe('problem users', () => {
    it('should be locked out', () => {
        LoginPage.open()
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.lockedOut).toHaveTextContaining("this user has been locked out")
    })
})