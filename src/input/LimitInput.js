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
      value: '',
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
    const value = e.target.value
    this.setState({
      value
    })
  }

  render () {
    const { value: defaultVal, maxLength: defaultMax, isvalid } = this.state
    const { suffix, maxLength, value, ...restProps } = this.props
    /** form组件中，value有值 */
    const val = value || defaultVal
    const max = maxLength > 0 ? maxLength : defaultMax
    const len = val.length > max ? max : val.length

    return isvalid ?
    <Input 
      onChange={ e => this.handleChange(e) } 
      suffix={`${len}/${max}`}
      maxLength={max}
      value={val}
      { ...restProps }
      />
    : <Input { ...this.props } />
  }
}

export default LimitInput