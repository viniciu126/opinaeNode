'use strict'

class storeUsuario {
  get rules () {
    return {
      nome: 'required',
      email: 'required',
      ra: 'required',
      password: 'required',
      tipo: 'required|in:admin,professor,aluno'
    }
  }

  fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = storeUsuario
