import * as React from 'react'
import Todo from './Todo'
import { TODO } from '../redux/reducers';

interface Props {
  todos?: TODO[];
  onTodoClick(id: number): void;
}

const TodoList = (props: Props) => (
  <ul>
    {props.todos !== undefined && (props.todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text? todo.text : ''}
        completed={todo.completed}
        onClick={() => props.onTodoClick(todo.id)}
      />
    )))}
  </ul>
)

export default TodoList
