import React from 'react';

class SecondExample extends React.Component {
  constructor() {
    super();
    this.state = { showContent: false }
  }

  onClickHandler = () => {
    this.setState(prevState => ({ showContent: !prevState.showContent }))
  }

  render() {
    return <div>
      {this.state.showContent
        ? <div>Show Content is True</div>
        : null
      }
      <button onClick={this.onClickHandler}>Change state</button>
    </div>
  }
}

export default SecondExample;