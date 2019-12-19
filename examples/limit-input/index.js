import React, { PureComponent, Fragment } from 'react'
import { LimitInput } from '../../src'
import SearchForm from './search-form'

class LimitInputExample extends PureComponent {
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
        <LimitInput
          value={this.state.val}
          onChange={ e => this.onChange(e) }
          />
        <div style={style}>
          输入内容：{this.state.val}
        </div>
  
        <br />
        <hr />
        <div style={style}>结合form表单使用：</div>
        <SearchForm />
      </Fragment>
    )
  }
}

export default LimitInputExample
