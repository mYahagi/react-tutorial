import * as React from 'react'

interface Props {
  active: boolean;
  children: any;
  onClick(): void;
}

const Link = (props: Props) => (
  <button
    onClick={props.onClick}
    disabled={props.active}
    style={{
      marginLeft: '4px'
    }}
  >
    {props.children}
  </button>
)

export default Link
