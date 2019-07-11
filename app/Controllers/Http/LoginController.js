'use strict'
const User = use('App/Models/User')

class LoginController {

  async login ({ request, response, auth }) {
    const { ra, password } = request.all()

    const login = await auth.attempt(ra, password, true)

    return response.json({
      status: 'success',
      data: login
    })
  }
}

module.exports = LoginController
