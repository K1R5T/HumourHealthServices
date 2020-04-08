import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    userName:'',
    email:'',
    password:''
  }

  createUser = async (event) => {
    event.preventDefault();

    let response = await fetch('http://localhost:3007/createUser', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    });
    console.log(await response.json());
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <>
        <form onSubmit={this.createUser}>

          <label>
            userName:
            <input type="text" name="userName" value={this.state.name} onChange={this.handleInputChange}></input>
          </label>

          <label>
            email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
          </label>

          <label>
            password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </>
    )
  }
}

export default App;