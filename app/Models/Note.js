'use strict'

const Lucid = use('Lucid')

class Note extends Lucid {
    getNoteByParams() {
        const notes = yield Database.from('notes').where('id', 1);
        return notes
    }
}