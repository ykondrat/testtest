function getMinutesBetweenDates(startDate, endDate) {
    let diff = endDate.getTime() - startDate.getTime();
    return (diff / 60000);
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return ([...state, {
          id: action.id,
          title: action.title,
          text: action.text,
          startTime: action.startTime,
          endTime: action.startTime,
          doneTime: action.doneTime,
          completed: "TODO"
        }
      ])
    case 'INPROGRESS_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: "INPROGRESS", startTime: new Date() } : todo)
    case 'DONE_TODO':
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: "DONE", endTime: new Date(), doneTime: getMinutesBetweenDates(todo.startTime, new Date()) } : todo)
    default:
      return state
  }
}

export default todos
