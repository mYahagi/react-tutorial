import * as React from 'react';

export interface Props {
  text: string;
}

class Clock extends React.Component<Props> {
  constructor(props: Props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.text}.</h2>
      </div>
    );
  }
}

export default Clock;
