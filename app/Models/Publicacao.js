'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Publicacao extends Model {
    static get createdAtColumn() {
      return null
    }

    static get updatedAtColumn() {
      return null
    }

    user () {
        return this.belongsTo('App/Models/User')
    }

    comentarios() {
        return this.hasMany('App/Models/Comentario')
    }
}

module.exports = Publicacao
