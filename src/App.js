import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/Header";
import FormComp from "./containers/FormComp";
import Products from "./containers/Products";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormComp />
        <Products />
      </div>
    );
  }
}

export default App;
