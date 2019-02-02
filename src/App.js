import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import About from './pages/About'
import Main from './pages/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{ marginLeft: 10 }}>
            <Redirect to="/main" />
            <Route path="/about" component={About} />
            <Route path="/main" exact component={Main} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
