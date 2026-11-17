
class ShoppingCartHelper {

  // Add Product to Cart
  addProductToCart(productName) {
    cy.contains('.inventory_item', productName).within(() => {

      cy.get('.inventory_item_name')
        .invoke('text')
        .then((name) => {
          expect(name.trim()).to.equal(productName)
        })

      cy.contains('button', 'Add to cart').click()
    })
  }

  // Verify Cart Badge
  verifyCartBadge(count) {
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', count.toString())
  }

  // Open Shopping Cart
  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  // Product in Cart
  verifyProductInCart(productName) {
    cy.get('.cart_item').within(() => {
      cy.get('.inventory_item_name')
        .should('be.visible')
        .and('have.text', productName)
    })
  }

}
export default ShoppingCartHelper
