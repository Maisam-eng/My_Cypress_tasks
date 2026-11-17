
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
// TC-003 Invalid Username
  it('TC-003 - Invalid Username', () => {
    login.verifyLoginFields()
    login.enterUsername('invalid_user')
    login.enterPassword('secret_sauce')
    login.clickLogin()

    login.verifyInvalidLogin()
  })

  // TC-004 Empty Username
  it('TC-004 - Empty Username', () => {
    login.verifyLoginFields()
    login.enterPassword('secret_sauce')
    login.clickLogin()

    login.verifyEmptyUsername()
  })

  // TC-005 Empty Password
  it('TC-005 - Empty Password', () => {
    login.verifyLoginFields()
    login.enterUsername('standard_user')
    login.clickLogin()

    login.verifyEmptyPassword()
  })

  // TC-006 Locked Out User
  it('TC-006 - Locked Out User', () => {
    login.verifyLoginFields()
    login.enterUsername('locked_out_user')
    login.enterPassword('secret_sauce')
    login.clickLogin()

    login.verifyLockedOutUser()
  })

  // TC-022 Logout
  it('TC-022 - Logout', () => {
    login.enterUsername('standard_user')
    login.enterPassword('secret_sauce')
    login.clickLogin()

    login.verifySuccessfulLogin()

    login.logout()
    login.verifyLogout()
  })

})
