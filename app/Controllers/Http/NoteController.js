'use strict'
const Note = use('App/Models/Note')

class NoteController {
    async index({ view }) {
        const notes = await Note.getNoteByParams();

        return view.render('notes.index',{
            title: 'Notes List',
            notes: notes.toJSON()
        })
    }
}

module.exports = NoteController
