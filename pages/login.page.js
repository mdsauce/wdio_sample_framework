// login
import Base from './base.page'

class LoginPage extends Base {

    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get submitBtn() { return $('.btn_action') }
    get loginErr() { return $('h3*=Username and password do not match')}
    get lockedOut() { return $('h3*=this user has been locked out')}
    


    open() {
        super.open('https://www.saucedemo.com/')
    }

    submit() {
        this.submitBtn.click()
    }

    login(user) {
        this.open()
        this.username.setValue(user)
        this.password.setValue('secret_sauce')
        this.submit()
    }

}

export default new LoginPage()