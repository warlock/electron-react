import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        ESTIC ABOUT. <Link to="/main">Index</Link>
      </div>
    )
  }
}
