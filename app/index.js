import React, { Component } from 'react'
import { render } from 'react-dom'

class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
    return fetch('/api', {
      method: 'GET'
    })
    .then(response => console.log(response))
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}

render(<Root />, document.getElementById('main'))
