'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    publicacao () {
        return this.belongsTo('App/Models/Publicacao')
    }
}

module.exports = Comentario
