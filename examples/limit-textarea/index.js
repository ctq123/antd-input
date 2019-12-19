import React, { PureComponent, Fragment } from 'react'
import { LimitTextArea } from '../../src'
import SearchForm from './search-form'

class LimitTextAreaExample extends PureComponent {
  state = {
    val: ''
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({ val: e.target.value })
  }
  
  render() {
    const style = {
      width: '100%',
      margin: '8px 0px',
      textAlign: 'left',
    }
    return (
      <Fragment>
        <div style={style}>单独使用：</div>
        <div style={style}>
          <LimitTextArea
            value={this.state.val}
            onChange={ e => this.onChange(e) }
          />
        </div>
        <div style={style}>
          输入内容：{this.state.val}
        </div>
  
        <hr />
        <div style={style}>结合form表单使用：</div>
        <SearchForm />
      </Fragment>
    )
  }
}

export default LimitTextAreaExample
