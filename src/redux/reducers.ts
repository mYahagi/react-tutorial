import { combineReducers } from 'redux'
import {
  IActionType,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from './actions'

export type TODO = {
  id: number;
  text?: string,
  completed: boolean
}

type STATE = {
  visibilityFilter: string,
  todos: TODO[],
}

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(filter = SHOW_ALL, action: IActionType) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return filter
  }
}

function todos(todos: TODO[] = [], action: IActionType): TODO[] {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: todos.length > 0? todos[todos.length - 1].id + 1 : 0,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return todos
  }
}

// stateのkeyに対応したreducerが実行される
// combineReducerを使用しない場合には、actionのtypeを見て呼び出すreducerをハンドリングするような処理を書く
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
