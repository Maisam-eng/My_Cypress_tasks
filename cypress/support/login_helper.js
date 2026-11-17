
class LoginHelper {

  // Visit Login Page
  visitLoginPage() {
    cy.visit('https://www.saucedemo.com/')
  }

  // Get Username Field
  getUsername() {
    return cy.get('#user-name')
  }

  // Get Password Field
  getPassword() {
    return cy.get('#password')
  }

  // Get Login Button
  getLoginButton() {
    return cy.get('#login-button')
  }

  // Verify Login Fields
  verifyLoginFields() {
  cy.get('form').within(() => {
    cy.get('#user-name').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#login-button').should('be.visible')
  })
}

  // Enter Username
  enterUsername(username) {
    this.getUsername()
      .type(username)
      .should('have.value', username)
  }

  // Enter Password
  enterPassword(password) {
    this.getPassword()
      .type(password)
      .should('have.value', password)
  }

  // Click Login
  clickLogin() {
    this.getLoginButton().click()
  }

  // Verify Successful Login
  verifySuccessfulLogin() {
    cy.url().should('include', '/inventory.html')

    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products')

    cy.get('.inventory_item')
      .should('be.visible')
      .and('have.length.greaterThan', 0)
  }

  // Verify Error Message
  verifyErrorMessage(message) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.attr', 'data-test', 'error')
      .and('have.text', message)

    cy.get('[data-test="error"] svg')
      .should('be.visible')
  }

  // Verify Invalid Login
  verifyInvalidLogin() {
    cy.url().should('not.include', '/inventory.html')

    this.verifyErrorMessage(
      'Epic sadface: Username and password do not match any user in this service'
    )
  }

  // Verify Empty Username
  verifyEmptyUsername() {
    this.verifyErrorMessage(
      'Epic sadface: Username is required'
    )
  }

  // Verify Empty Password
  verifyEmptyPassword() {
    this.verifyErrorMessage(
      'Epic sadface: Password is required'
    )
  }

  // Verify Locked Out User
  verifyLockedOutUser() {
    cy.url().should('not.include', '/inventory.html')

    this.verifyErrorMessage(
      'Epic sadface: Sorry, this user has been locked out.'
    )
  }

  // Logout
  logout() {
    cy.get('#react-burger-menu-btn').click()

    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click()
  }

  // Verify Logout
  verifyLogout() {
    cy.url().should('eq', 'https://www.saucedemo.com/')

    this.verifyLoginFields()
  }

}

export default LoginHelper
