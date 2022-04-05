function compareByTitle (itemA, itemB) {
  return itemA.title.localeCompare(itemB.title);
}

module.exports = {
  sortTodos(todoList) {
    let undone = todoList.todos.filter(todo => !todo.isDone());
    let done   = todoList.todos.filter(todo => todo.isDone());
    undone.sort(compareByTitle);
    done.sort(compareByTitle);

    return undone.concat(done);
  },

  sortTodoLists(todoLists) {
    let undone = todoLists.filter(todoList => !todoList.isDone());
    let done = todoLists.filter(todoList => todoList.isDone());

    undone.sort(compareByTitle);
    done.sort(compareByTitle);

    return undone.concat(done);
  }
};