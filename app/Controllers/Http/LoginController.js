'use strict'

class LoginController {

  login ({ request, auth }) {
    const data = request.all()

    return auth.attempt(data.ra, data.password)
  }

  logout ({request, auth}){
    return auth.logout();
  };
}

module.exports = LoginController
