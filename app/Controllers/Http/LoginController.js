'use strict'
const User = use('App/Models/User')

class LoginController {

  async login({ request, auth }) {
    const { ra, password } = request.all()

    const login = auth.attempt(ra, password, true)

    return response.json({
      status: 'success',
      data: login
    })
  }

  async logout({ auth }) {
    auth.logout()
  }

}

module.exports = LoginController
