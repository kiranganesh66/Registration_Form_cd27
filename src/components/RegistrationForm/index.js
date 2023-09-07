import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firerror: '',
    scndErr: '',
    isTrue: false,
  }

  Chnage = () => this.setState({isTrue: false})

  secondPage = () => {
    const {isTrue} = this.state
    return (
      <div className="form-container">
        <img
          alt="success"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.Chnage}>
          Submitted Another response
        </button>
      </div>
    )
  }

  firstPage = () => {
    const {firerror, scndErr} = this.state

    return (
      <div>
        <form className="form-container" onSubmit={this.onSubmit}>
          <label className="input-label" htmlFor="username">
            FIRST NAME
          </label>
          <input
            placeholder="First Name"
            type="text"
            className="username-input-filed"
            id="username"
            onChange={this.firstName}
          />
          <p className="errorMSg">{firerror}</p>

          <label className="input-label" htmlFor="password">
            LAST NAME
          </label>
          <input
            placeholder="Last Name"
            type="text"
            className="username-input-filed"
            id="password"
            onChange={this.lastName}
          />
          <p className="errorMSg">{scndErr}</p>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }

  onSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.setState({firerror: 'Require'})
    } else {
      this.setState({firerror: ''})
    }

    if (lastName === '') {
      this.setState({scndErr: 'Require'})
    } else {
      this.setState({scndErr: ''})
    }

    const fistNameLen = firstName.length
    const scndNameLen = lastName.length

    if (fistNameLen > 0 && scndNameLen > 0) {
      this.setState({isTrue: true})
    } else {
      this.setState({isTrue: false})
    }
  }

  firstName = event => {
    this.setState({firstName: event.target.value})
  }

  lastName = event => {
    this.setState({lastName: event.target.value})
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="main_CONT">
        <h1 className="Head">Registration From </h1>
        {isTrue ? this.secondPage() : this.firstPage()}
      </div>
    )
  }
}

export default RegistrationForm
