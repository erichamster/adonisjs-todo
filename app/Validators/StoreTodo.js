'use strict'

class StoreTodo {
  get rules () {
    return {
      addTodo: 'required|min:3',
    }
  }

  get messages(){
    return {
      'addTodo.requied': 'The add todo field is required',
      'addTodo.min': 'The add todo field requires at least 3 characters',
    }
  }
}

module.exports = StoreTodo
