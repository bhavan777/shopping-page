import React, { Component } from "react";
import logo from "../images/carrefour_logo.svg";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        active: false,
        value: "",
        placeholder: "Search",
      },
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }
  changeHandle(e) {
    this.setState({
      ...this.state.input,
      input: { active: true, value: e.target.value },
    });
  }
  onFocus() {
    this.setState({
      input: { ...this.state.input, active: true },
    });
  }
  onBlur() {
    if (this.state.input.value === "") {
      this.setState({
        input: { ...this.state.input, active: false },
      });
    }
  }

  render() {
    return (
      <header className="App-header">
        <div className="container header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="search-wrap">
            <input
              className={`search ${this.state.input.active ? "active" : ""}`}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.changeHandle}
              id="search-input"
              placeholder={this.state.input.placeholder}
              value={this.state.input.value}
            />
            <label htmlFor="search-input" className="search-icon" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
