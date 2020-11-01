import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

interface Props {
  dispatch: Dispatch
}

const AddTodo = (props: Props) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={(node: HTMLInputElement) => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
