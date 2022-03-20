'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeliculaSchema extends Schema {
  up () {
    this.create('peliculas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('peliculas')
  }
}

module.exports = PeliculaSchema
