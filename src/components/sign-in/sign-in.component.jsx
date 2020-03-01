import React, { Component } from "react"
import "./sign-in.styles.scss"

import { FormInput } from "../form-input/form-input.component"
import { CustomButton } from "../custom-button/custom-button.component"

import { signInWithGoogle } from "../../firebase/firebase.utils"

export default class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign-in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
