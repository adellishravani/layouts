import {Component} from 'react'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

class Layout extends Component {
  render() {
    const {leftchkbox, rightchkbox, contentbox} = this.props
    return (
      <div className="downbg">
        <Header />
        <Body
          leftchkbox={leftchkbox}
          rightchkbox={rightchkbox}
          contentbox={contentbox}
        />
        <Footer />
      </div>
    )
  }
}

export default Layout
