
class LoginHelper {

  visitLoginPage() {
    cy.visit('https://www.saucedemo.com/')
  }

  getUsername() {
    return cy.get('#user-name')
  }

  getPassword() {
    return cy.get('#password')
  }

  getLoginButton() {
    return cy.get('#login-button')
  }

  verifyLoginFields() {
    this.getUsername().should('be.visible')
    this.getPassword().should('be.visible')
    this.getLoginButton().should('be.visible')
  }

  enterUsername(username) {
    this.getUsername().type(username).should('have.value', username)
  }

  enterPassword(password) {
    this.getPassword().type(password).should('have.value', password)
  }

  clickLogin() {
    this.getLoginButton().click()
  }

  verifySuccessfulLogin() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('be.visible').and('have.text', 'Products')
    cy.get('.inventory_item').should('be.visible').and('have.length.greaterThan', 0)
  }

  verifyInvalidLogin() {
    cy.url().should('not.include', '/inventory.html')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.attr', 'data-test', 'error')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')

    cy.get('[data-test="error"] svg').should('be.visible')
  }

}

export default LoginHelper
