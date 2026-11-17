
import LoginHelper from '../../support/login_helper'
import ShoppingCartHelper from '../../support/shopping_cart_helper'

const login = new LoginHelper()
const cart = new ShoppingCartHelper()

describe('Shopping Cart Tests', () => {

  it('TC-023: Login and Add Product to Cart', () => {

    // Login
    login.visitLoginPage()
    login.enterUsername('standard_user')
    login.enterPassword('secret_sauce')
    login.clickLogin()

    login.verifySuccessfulLogin()

    // Add Product to Cart
    cart.addProductToCart('Sauce Labs Backpack')

    // Verify Cart Badge
    cart.verifyCartBadge(1)

    // Open Shopping Cart
    cart.openCart()

    // Verify Product in Cart
    cart.verifyProductInCart('Sauce Labs Backpack')

  })

})
