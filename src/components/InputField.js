import React, { Component } from "react";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      isActive: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFocus() {
    this.setState({ isActive: true });
  }
  onBlur(e) {
    if (e.target.value !== "") {
      this.setState({ isActive: true });
    } else {
      this.setState({ isActive: false });
    }
  }
  onChange(e) {
    let val = e.target.value;
    if (val !== "") {
      let newState = { ...this.state };
      newState.error.hasError = false;
      this.setState({ newState });
    }
    this.props.handleChange(this.state.id, val);
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props &&
      (props.error.hasError !== state.error.hasError ||
        props.value !== state.value ||
        props.disabled !== state.disabled)
    ) {
      return {
        ...props,
      };
    }
    return null;
  }
  render() {
    return (
      <div
        className={`input-field ${
          this.state.error.hasError ? "has-error" : ""
        } ${this.state.isActive ? "active" : ""}`}
      >
        <label htmlFor={this.state.id} className="input-label">
          {this.state.placeholder}
        </label>
        {this.state.error.hasError && (
          <span className="helper-text">{this.state.error.errorMsg}</span>
        )}
        <input
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          disabled={this.state.disabled}
          onChange={this.onChange}
          className="input-element"
          id={this.state.id}
          value={this.state.value}
          type={this.state.type ? this.state.type : "text"}
        />
      </div>
    );
  }
}
