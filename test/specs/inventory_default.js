// inventory_default.js
// var expect = require('chai').expect
import InventoryPage from '../../pages/inventory.page'
import LoginPage from '../../pages/login.page'
import inventoryPage from '../../pages/inventory.page'


describe('Inventory page', () => {
    it('should sort by High to Low', () => {
        LoginPage.login('standard_user')
        InventoryPage.sortHighToLow()
    })

    it('should find Fleece Jacket first in list', () => {
        expect(InventoryPage.firstItemName).toHaveTextContaining("Fleece Jacket")
    })

    it('should have cheapest item at end of list', () => {
        expect(InventoryPage.lastItemName.getText()).toHaveTextContaining("Onesie")
    })
})