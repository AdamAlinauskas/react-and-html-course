'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    /*
      1) Remove the following code from the previous example

      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    */

    /*
      2) Add the JSX version to create a component. 
      Both codes will do the same. 
      The first one uses teh createElement function.
      The folowing one will use JSX way
    */

    return (<button onClick={() => this.setState({ liked: true })}>
      Like
    </button>);
  }
}

const domContainer = document.querySelector('#like_button_container');
/* 
  3) Replace e function for the JSX format
    As we can now support JSX format we no longer need to call e function
    ReactDOM.render(e(LikeButton), domContainer);
 */

// 4) JSX format
ReactDOM.render(<LikeButton />, domContainer);