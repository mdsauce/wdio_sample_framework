// inventory_default.js
import InventoryPage from '../../pages/inventory.page'
import LoginPage from '../../pages/login.page'


describe('Cart', () => {
    it('should add the bike light', () => {
        LoginPage.login('standard_user')
        browser.pause(10000)
        expect(InventoryPage.itemName(2).getText()).toHaveTextContaining("Bike Light")
        InventoryPage.item(2).$('.pricebar').$('button').click()
        expect(InventoryPage.item(2).$('.pricebar').$('button')).toHaveTextContaining("REMOVE")
    })

    it('should add the backpack', () => {
        browser.pause(10000)
        expect(InventoryPage.itemName(1).getText()).toHaveTextContaining("Backpack")
        InventoryPage.item(1).$('.pricebar').$('button').click()
        expect(InventoryPage.item(1).$('.pricebar').$('button')).toHaveTextContaining("REMOVE")
    })

    // it ('should have the cart badge', () => {
    //     expect( $('.fa-layers-counter shopping_cart_badge'))
    // })
})