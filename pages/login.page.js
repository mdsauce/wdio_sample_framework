// login
import Base from './base.page'

class LoginPage extends Base {

    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get submitBtn() { return $('.btn_action') }
    get loginErr() { return $('h3*=Username and password do not match')}

    open() {
        super.open('https://www.saucedemo.com/')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new LoginPage()