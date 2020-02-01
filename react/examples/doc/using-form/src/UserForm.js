import React from 'react';

const errorStyle = {
  border: '1px solid red',
  color: 'red',
  backgroundColor: 'rgba(255, 0, 0, 0.2)'
};

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      lastname: '',
      country: 'Canada',
      showError: false,
    }
  }

  changeNameHandler = (event) => {
    const { target } = event;
    this.setState({ name: target.value });
  }

  changeLastnameHandler = (event) => {
    const { target } = event;
    this.setState({ lastname: target.value });
  }

  validateForm = (event) => {
    event.preventDefault();
    const { name, lastname, country } = this.state;

    if (name === '' || lastname === '') {
      this.setState({ showError: true });
    } else {
      this.setState({
        name: '',
        lastname: '',
        country: 'Canada',
        showError: false,
      }, () => {
        this.props.onSubmitHandler({ name: name, lastname: lastname, country: country });
      });
    }
  };

  countryChangeHandler = (event) => {
    console.log(event.target.value);

    this.setState({ country: event.target.value });
  }

  render() {
    return <div>
      <form onSubmit={this.validateForm}>
        {this.state.showError
          ? <div style={errorStyle}>Please fill all the inputs</div>
          : null
        }
        <input type="text" name="name" value={this.state.name} onChange={this.changeNameHandler} placeholder="Name" />
        <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeLastnameHandler} placeholder="LastName" />
        <select value={this.state.country} onChange={this.countryChangeHandler}>
          <option value="EEUU">EEUU</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
        </select>
        <button>Create</button>
      </form>
    </div>;
  }
}

export default UserForm;