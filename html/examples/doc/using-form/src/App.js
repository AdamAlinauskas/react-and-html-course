import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  handleSubmit = (user) => {
    console.log(user);
    this.setState({
      users: [
        ...this.state.users,
        user,
      ]
    });
  }

  clearList = () => {
    this.setState({ users: [] });
  }

  deleteItem = (event) => {
    const users = this.state.users.filter(user => user.name !== event.target.name);
    this.setState({ users: users });
  };

  render() {
    return (
      <div className="App" >
        <UserForm onSubmitHandler={this.handleSubmit} />

        <div>
          <ul>
            {this.state.users.length > 0
              ? this.state.users.map((user) =>
                <li key={user.name}>
                  {user.name} {user.lastname} : {user.country}
                  <button name={user.name} onClick={this.deleteItem}>delete</button>
                </li>)
              : <div>Empty Users</div>
            }
          </ul>
        </div>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}

export default App;
