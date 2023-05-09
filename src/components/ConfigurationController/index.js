import './index.css'

const ConfigurationController = props => {
  const {leftbox, rightbox, content} = props

  const contentbx = () => {
    content()
  }

  const leftboxbx = () => {
    leftbox()
  }

  const righttboxbx = () => {
    rightbox()
  }

  return (
    <div className="navbg">
      <h1 className="layout">Layout</h1>
      <br />
      <div className="inputs">
        <div className="inputdiv">
          <input type="checkbox" id="chkbox1" onClick={contentbx} />
          <label htmlFor="chkbox1">Content</label>
        </div>

        <div className="inputdiv">
          <input type="checkbox" id="chkbox2" onClick={leftboxbx} />
          <label htmlFor="chkbox2">Left Navbar</label>
        </div>

        <div className="inputdiv">
          <input type="checkbox" id="chkbox3" onClick={righttboxbx} />
          <label htmlFor="chkbox3">Right Navbar</label>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationController
