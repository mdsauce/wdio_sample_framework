// inventory
import Base from './base.page'
import LoginPage from './login.page'

class InventoryPage extends Base {

    get logo() { return $('.app_logo') }
    get sorter() { return $('.product_sort_container')}
    get highToLow() { return $('option*=high to low') }
    get firstItemName() { return $('.inventory_item_name') }
    get lastItemName() { return this.inventoryList.$$('.inventory_item_name')[5] }
    get inventoryList() { return $$('.inventory_list')[0] }

    open() {
        super.open('https://www.saucedemo.com/inventory.html')
    }

    sortHighToLow() {
        this.sorter.click()
        this.highToLow.click()
    }

    itemName(number) {
        let n = this.inventoryList.$$('.inventory_item_name')[number-1]
        // add retry step here.  If n == null or whatever
        return  n
    }

    item(number) {
        return this.inventoryList.$$('.inventory_item')[number-1] 
    }
}

export default new InventoryPage()