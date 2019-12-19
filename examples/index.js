import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import LimitInputExample from './limit-input'

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
    return (
      <div style={style}>
        <LimitInputExample />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
