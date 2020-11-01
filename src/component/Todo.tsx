import * as React from 'react';

interface Props {
  onClick(): void;
  completed: boolean;
  text: string;
}

const Todo = (props: Props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none'
      }}
    >
      {props.text}
    </li>
  )
}

export default Todo
