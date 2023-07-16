'use strict'

class UpdateTodo {
  get rules () {
    return {
      editTodo: 'required|min:3',
    }
  }

  get messenges(){
    return {
      'editTodo.requied': 'The edit todo field is required',
      'editTodo.min': 'The edit todo field requires at least 3 characters',
    }
  }
}

module.exports = UpdateTodo
