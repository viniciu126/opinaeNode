'use strict'

class storePublicacao {
  get rules () {
    return {
      textoPublicacao: 'required'
    }
  }
}

module.exports = storePublicacao
