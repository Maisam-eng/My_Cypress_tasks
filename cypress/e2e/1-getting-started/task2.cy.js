
/// <reference types="cypress" />

import LoginHelper from '../../support/login_helper'

context('Login & Logout', () => {

  const login = new LoginHelper()

  beforeEach(() => {
    login.visitLoginPage()
  })

  // TC-001 Valid Login
  it('TC-001 - Valid Login', () => {

    login.verifyLoginFields()

    login.enterUsername('standard_user')

    login.enterPassword('secret_sauce')

    login.clickLogin()

    login.verifySuccessfulLogin()

  })


  // TC-002 Invalid Password
  it('TC-002 - Invalid Password', () => {

    login.verifyLoginFields()

    login.enterUsername('standard_user')

    login.enterPassword('wrong_password')

    login.clickLogin()

    login.verifyInvalidLogin()

  })

})
