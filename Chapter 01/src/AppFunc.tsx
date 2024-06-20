import React, { useState } from "react";

interface LoginFormState {
  username: string;
  password: string;
}

export const AppFunc: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic using formState.username and formState.password
  };

  return (
    <div>
      <h1>Login Page : Functional Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
