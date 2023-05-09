import {Component} from 'react'

import './index.css'

class Body extends Component {
  render() {
    const {leftchkbox, rightchkbox, contentbox} = this.props
    return (
      <div className="bodydiv">
        {leftchkbox && (
          <div className="leftbar">
            <h1>Left Navbar Menu</h1>
            <ul className="ullist">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        )}

        {contentbox && (
          <div className="content">
            <h1>Content</h1>
            <p className="para">
              Lorem ipsum dolor sit amet,consecteur adipiscing elit,sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
              enim and minim veniam.
            </p>
          </div>
        )}

        {rightchkbox && (
          <div className="rightbar">
            <h1>Right Navbar</h1>
            <div className="rdiv">Ad 1</div>
            <div className="rdiv">Ad 2</div>
          </div>
        )}
      </div>
    )
  }
}

export default Body
