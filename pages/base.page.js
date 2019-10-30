export default class Base {
    constructor() {
        this.title = 'Default Page'
    }

    open(path) {
        browser.url(path)
    }
}