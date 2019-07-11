'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicacaoSchema extends Schema {
  up() {
    this.create('publicacaos', (table) => {
      table.increments()

      table.foreign('user_id')
      table.integer('user_id').unsigned().notNullable()

      table.text('publicacao')
      table.timestamps()
    })
  }

  down() {
    this.drop('publicacaos')
  }
}

module.exports = PublicacaoSchema
