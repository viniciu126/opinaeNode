'use strict'
const User = use('App/Models/User')

class LoginController {

  async login({ request, auth }) {
    const { ra, password } = request.all()

    return auth.attempt(ra, password, true)
  }

  async logout({ auth }) {
    auth.logout()
  }

}

module.exports = LoginController
