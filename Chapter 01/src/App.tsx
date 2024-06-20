import React from "react";
import { AppFunc } from "./AppFunc";
import { AppClass } from "./AppClass";

interface LoginFormState {
  username: string;
  password: string;
}

export default class App extends React.Component<{}, LoginFormState> {
  render() {
    return (
      <>
        <AppClass />
        <hr />
        <AppFunc />
      </>
    );
  }
}
