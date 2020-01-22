import React, { PureComponent } from 'react'
import Input from 'antd/lib/input'
import 'antd/lib/input/style/index.css'

/***
 * 显示最大输入字符数
 * maxLength：50（默认）
 */
class LimitInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      len: 0,
      maxLength: 50,
      isvalid: true, // 是否显示最大字符数
    }
    if (props.suffix) {
      this.state.isvalid = false
      console.warn('LimitInput：用户自定义suffix属性将优先使用，显示最大输入字符数将失效!')
    }
    // 若需要覆盖onChange时，value必填
    if (props.onChange && !props.hasOwnProperty('value')) {
      this.state.isvalid = false
      console.warn('LimitInput：绑定onChange时，value属性必填，否则显示最大输入字符数将失效!')
    }
  }

  // 若外部定义了onChange事件，handleChange将会被覆盖
  handleChange = (e) => {
    const val = e.target.value
    this.setState({
      len: val.length
    })
  }

  render () {
    const { maxLength: defaultMax, isvalid } = this.state
    const { suffix, maxLength, value, ...restProps } = this.props
    /** form组件中，value有值 */
    const len = value ? value.length : this.state.len
    const max = maxLength > 0 ? maxLength : defaultMax

    return isvalid ?
    <Input 
      onChange={ e => this.handleChange(e) } 
      suffix={`${len}/${max}`}
      maxLength={max}
      value={value}
      { ...restProps }
      />
    : <Input { ...this.props } />
  }
}

export default LimitInput