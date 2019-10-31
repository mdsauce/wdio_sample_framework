// inventory
import Base from './base.page'
import LoginPage from './login.page'

class InventoryPage extends Base {

    get logo() { return $('.app_logo') }
    get sorter() { return $('.product_sort_container')}
    get highToLow() { return $('option*=high to low') }
    get firstItemName() { return $('.inventory_item_name') }
    get lastItemName() { return $('//div/div[2]/div[2]/div/div[2]/div/div[6]/div[2]/a/div') }

    open() {
        super.open('https://www.saucedemo.com/inventory.html')
    }

    sortHighToLow() {
        this.sorter.click()
        this.highToLow.click()
    }
}

export default new InventoryPage()