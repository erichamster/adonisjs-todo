'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoteSchema extends Schema {
  up () {
    this.create('notes', (table) => {
      table.increments()
      table.string('title', 80).nullable().unique()
      table.string('content', 254).nullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('notes')
  }
}

module.exports = NoteSchema
