// inventory_default.js
var expect = require('chai').expect
import InventoryPage from '../../pages/inventory.page'
import LoginPage from '../../pages/login.page'


describe('Cart', () => {
    it('should add the bike light', () => {
        LoginPage.login('standard_user')
        browser.pause(10000)
        expect(InventoryPage.itemName(2).getText()).to.contain("Bike Light")
        InventoryPage.item(2).$('.pricebar').$('button').click()
        expect(InventoryPage.item(2).$('.pricebar').$('button').getText()).to.contain("REMOVE")
    })

    it('should add the backpack', () => {
        browser.pause(10000)
        expect(InventoryPage.itemName(1).getText()).to.contain("Backpack")
        InventoryPage.item(1).$('.pricebar').$('button').click()
        expect(InventoryPage.item(1).$('.pricebar').$('button').getText()).to.contain("REMOVE")
    })

    // it ('should have the cart badge', () => {
    //     expect( $('.fa-layers-counter shopping_cart_badge'))
    // })
})