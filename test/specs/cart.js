// inventory_default.js
var expect = require('chai').expect
import InventoryPage from '../../pages/inventory.page'
import LoginPage from '../../pages/login.page'
import inventoryPage from '../../pages/inventory.page'


describe('Cart', () => {
    it('should have the bike light added', () => {
        LoginPage.login('standard_user')
        expect(InventoryPage.itemName(2).getText()).to.contain("Bike Light")
        InventoryPage.item(2).$('.pricebar').$('button').click()
        expect(InventoryPage.item(2).$('.pricebar').$('button').getText()).to.contain("REMOVE")
    })

    it('should have the backpack added', () => {
        expect(InventoryPage.itemName(1).getText()).to.contain("Backpack")
        InventoryPage.item(1).$('.pricebar').$('button').click()
        expect(InventoryPage.item(1).$('.pricebar').$('button').getText()).to.contain("REMOVE")
    })

    // it ('should have the cart badge', () => {
    //     expect( $('.fa-layers-counter shopping_cart_badge'))
    // })
})