import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {leftchkbox: true, rightchkbox: true, contentbox: true}

  leftbox = () => {
    this.setState(prevState => ({
      leftchkbox: !prevState.leftchkbox,
    }))
  }

  rightbox = () => {
    this.setState(prevState => ({
      rightchkbox: !prevState.rightchkbox,
    }))
  }

  content = () => {
    this.setState(prevState => ({
      contentbox: !prevState.contentbox,
    }))
  }

  render() {
    const {leftchkbox, rightchkbox, contentbox} = this.state
    return (
      <div>
        <ConfigurationController
          leftbox={this.leftbox}
          rightbox={this.rightbox}
          content={this.content}
          leftchkbox={leftchkbox}
          rightchkbox={rightchkbox}
          contentbox={contentbox}
        />
        <Layout
          leftchkbox={leftchkbox}
          rightchkbox={rightchkbox}
          contentbox={contentbox}
        />
      </div>
    )
  }
}

export default App
