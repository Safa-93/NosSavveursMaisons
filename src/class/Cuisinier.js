import React, { Component } from 'react'

export default class Cuisinier extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ' ',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    console.log('this name was submitted')
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{' '}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="sabmit" />
        </form>
      </div>
    )
  }
}
