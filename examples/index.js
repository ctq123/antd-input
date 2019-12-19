import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import LimitInputExample from './limit-input'
import LimitTextAreaExample from './limit-textarea'

class App extends PureComponent {

  render () {
    const style = {
      width: '40%',
      margin: '30px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }
    const style2 = {
      height: 1,
      width: '100%',
      margin: '20px 0px',
      border: 'none',
      borderTop: '1px solid #d9d9d9',
    }
    return (
      <div style={style}>
        <LimitInputExample />
        <hr style={style2} />
        <LimitTextAreaExample />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
