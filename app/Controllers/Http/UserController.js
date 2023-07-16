'use strict'

class UserController {
    async index({ view }) {
        return view.render('users.index')
    }
    async store({ request, response }) {
        //
    }
    async create({ request, response }) {
        return view.render('users.index')
    }
    async show({ params, view  }) {
        const item = await User.find(params.id)
        return view.render('users.edit', {
            user: item
        })
    }
    async update({ request, response }) {
        //
    }
    async edit({ request, response }) {
        //
    }
    async destroy({ }) {
       
    }
}

module.exports = UserController
