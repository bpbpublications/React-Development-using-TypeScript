import React from "react";

interface LoginFormState {
  username: string;
  password: string;
}

export class AppClass extends React.Component<{}, LoginFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic using this.state.username and this.state.password
  };

  render() {
    return (
      <div>
        <h1>Login Page : Class Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
