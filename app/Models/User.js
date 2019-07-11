'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {

  static boot() {
    super.boot()

    this.addHook('beforeCreate', 'UsuarioHook.hashPassword')
    this.addHook('afterCreate', 'UsuarioHook.atribuirTipo')

  }

  static get hidden() {
    return ['password']
  }

  static get traits() {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  static setTipo (tipo) {
    return this.tipo = tipo
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  publicacoes () {
    return this.hasMany('App/Models/Publicacao')
  }

  comentarios () {
    return this.hasMany('App/Models/Comentario')
  }

}

module.exports = User
