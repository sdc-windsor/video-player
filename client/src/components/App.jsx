import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
    }
  }

  render() {
    return (
      <div>
        Hello from VideoPlayer Service!!!
      </div>
    )
  }
}
