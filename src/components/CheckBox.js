import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.fieldData,
      checked: this.props.fieldData.defaultValue || false,
    };
    this.changeHandle = this.changeHandle.bind(this);
  }
  changeHandle() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <div className="input-field-checkbox">
        <input
          id={this.state.id}
          type="checkbox"
          onChange={this.changeHandle}
          checked={this.state.checked}
        />
        <label htmlFor={this.state.id}> Keep me Logged In </label>
      </div>
    );
  }
}

export default CheckBox;
