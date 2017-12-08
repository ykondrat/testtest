let nextId = 0;

export const addTodo = (title, text) => ({
  type: 'ADD_TODO',
  id: nextId++,
  title,
  text
});

export const inprogressTodo = (id) => ({
  type: 'INPROGRESS_TODO',
  id
});

export const inprogressTodo = (id) => ({
  type: 'DONE_TODO',
  id
});
