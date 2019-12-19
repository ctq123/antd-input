# antd-input

对antd的Input进行一层封装，限制用户输入长度，并实时显示用户输入的长度，可以单独使用，也可以结合表单一起使用，属性与antd的Input完全保持一致，暂时没有自身独特的属性

## React antd-input
[![Build Status](https://travis-ci.org/ctq123/antd-input.svg?branch=master&foo=bar)](https://travis-ci.org/ctq123/antd-input)
[![NPM version](https://img.shields.io/badge/npm-v5.7.1-green.svg?style=flat)](https://www.npmjs.com/package/antd-input)

# install
npm i antd-input
# Usage

## 例子
![image](https://github.com/ctq123/antd-input/blob/master/example1.png)
```
import React, { PureComponent, Fragment } from 'react'
import { LimitInput } from 'antd-input'

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
      </Fragment>
    )
  }
}
```

# Prop Types

属性与antd的Input完全保持一致，暂时没有自身独特的属性

属性 | 描述 | 类型 | 默认值 | 是否必填
---|---|---|---|--
maxLength | 设置用户最大输入字符数，原antd的Input属性 | number | 50 | 否