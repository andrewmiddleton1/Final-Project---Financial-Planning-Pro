import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Button from "./components/UI/Button/Button";
import DataInputField from "./components/UI/DataInputField/DataInputField";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Button>Here is a button</Button>
          <DataInputField />
          <Login />
        </Layout>
      </div>
    );

  }
}

export default App;
