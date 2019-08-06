'use strict'

class Login {
  get rules () {
    return {
      ra: 'required',
      password: 'required'
    }
  }
}

module.exports = Login
