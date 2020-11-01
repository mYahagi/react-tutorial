import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import TodoList from '../component/TodoList'
import { TODO } from 'src/redux/reducers'
import { Dispatch } from 'redux'

interface State {
  todos: TODO[];
  visibilityFilter: string;
}
const getVisibleTodos = (todos: TODO[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state: State) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
