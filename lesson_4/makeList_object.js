function makeList() {
  let todos = [];
  return {
    add(item) {
      let index = todos.indexOf(item);
      if (index === -1) {
        todos.push(item);
        console.log(item + ' added!');
      }
    },

    remove(item) {
      let index = todos.indexOf(item);
      if (index !== -1) {
        todos.splice(index, 1);
        console.log(item + ' removed!');
      }
    },

    list() {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(item => console.log(item));
      }
    }
  };
}


let list = makeList();
list.list();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn