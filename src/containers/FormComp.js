import React, { Component } from "react";
import InputField from "../components/InputField";
import CheckBox from "../components/CheckBox";
import ValidateFormData from "../utils/formValidator";
class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitting: false,
      mockApiUrl:
        "http://www.mocky.io/v2/5b6eb73e3100000e007819fd?mocky-delay=2000ms",
      formData: [
        {
          id: "username",
          value: "",
          placeholder: "UserName",
          rules: {
            isRequired: true,
            validEmail: true,
          },
          error: {
            hasError: false,
            errorMsg: "",
          },
        },
        {
          id: "password",
          value: "",
          type: "password",
          placeholder: "Password",
          rules: {
            isRequired: true,
          },
          error: {
            hasError: false,
            errorMsg: "",
          },
        },
        {
          id: "keep-me-logged-in",
          defaultValue: true,
        },
      ],
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  Login() {
    this.setState({ isFormSubmitting: true });
    fetch(this.state.mockApiUrl)
      .then(res => res.json())
      .then(data => {
        console.log("mock data returned", data);
        alert(
          `hi ${
            data.user.name
          }, You just saw the form submitted to login from a mock API, check your console to see the returned mock data`,
        );
        this.setState({ isFormSubmitting: false });
      });
  }

  submitHandler(e) {
    e.preventDefault();
    let newState = ValidateFormData(this.state.formData);
    let isFormValid = true;
    newState.map(item => {
      if (item.error.hasError) {
        isFormValid = false;
      }
      return item;
    });
    if (isFormValid) {
      this.Login();
    }
    this.setState({ formData: newState });
  }
  handleChange(key, val) {
    let newFormData = [...this.state.formData].map(data => {
      if (data.id === key) {
        data.value = val;
      }
      return data;
    });
    this.setState({ formData: newFormData });
  }
  render() {
    return (
      <div className="container page-form-container">
        <form className="form" onSubmit={this.submitHandler}>
          <h2 className="title">Sign In Now</h2>
          <p className="tagline">Unlock awesome features!</p>
          <div className="input-group">
            <InputField
              handleChange={this.handleChange}
              {...this.state.formData[0]}
            />
            <InputField
              handleChange={this.handleChange}
              {...this.state.formData[1]}
            />
          </div>
          <div className="form-text-row">
            <CheckBox fieldData={this.state.formData[2]} />
            <a
              className="forgot-password-link"
              href="google.com/forgotpassword"
            >
              Forgot Password ?
            </a>
          </div>
          <button type="submit" className="form-submit-btn">
            {this.state.isFormSubmitting ? (
              <div className="spinner">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    );
  }
}

export default FormComp;
