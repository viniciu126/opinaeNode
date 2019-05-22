'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicacaoSchema extends Schema {
  up() {
    this.create('publicacaos', (table) => {
      table.increments()
      table.text('descricao')
      table.timestamps()
    })
  }

  down() {
    this.drop('publicacaos')
  }
}

module.exports = PublicacaoSchema
