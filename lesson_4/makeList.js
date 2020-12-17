function makeList() {
  let todoList = [];
  return function(todo) {
    if (todo) {
      let index = todoList.indexOf(todo);
      if (index === -1) {
        todoList.push(todo);
        console.log(`${todo} added!`);
      } else {
        todoList.splice(index, 1);
        console.log(`${todo} removed!`);
      }
    } else {
      if (todoList.length === 0) {
        console.log('The list is empty.');
      } else {
        todoList.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book