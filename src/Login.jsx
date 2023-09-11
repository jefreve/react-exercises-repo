import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: name === "username" ? this.state.username : this.state.password,
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChangeInput}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <button
          disabled={
            this.state.username.length > 0 && this.state.password.length > 0
              ? false
              : true
          }
          onClick={this.props.onLoginHandler}
        >
          Login
        </button>
      </div>
    );
  }
}
