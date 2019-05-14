import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { auth } from '../firebase'

class CreateAccount extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div>
        <Container>
          <form class="account-form">
            <h1>Create Account</h1>
            <Row>
              <input
                type="text"
                class="text-input"
                name="name"
                onChange={this.changeHandler}
                placeholder="Name:"
              />
            </Row>
            <Row class="text-input">
              <input
                type="text"
                class="text-input"
                name="email"
                onChange={this.changeHandler}
                placeholder="Email address:"
              />
            </Row>
            <Row class="text-input">
              <input
                type="password"
                class="text-input"
                name="password"
                onChange={this.changeHandler}
                placeholder="Password:"
              />
            </Row>
            <input
              type="button"
              class="button"
              value="Submit"
              onClick={this.submit.bind(this)}
            />
          </form>
        </Container>
      </div>
    )
  }

  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  submit() {
    if (this.state.email === "" || this.state.password === "") {
      console.log("Empty field")
      return
    }
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        const user = res.user
        console.log(user.uid)
      })
  }

}

export default CreateAccount