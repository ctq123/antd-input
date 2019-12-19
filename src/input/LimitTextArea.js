import React, { PureComponent } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import 'antd/lib/input/style/index.css'
import './LimitTextArea.less'

/***
 * 显示最大输入字符数
 * maxLength：200（默认）
 */
class LimitTextArea extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      val: '',
      maxLength: 200,
      isvalid: true, // 是否显示最大字符数
    }
    // 若需要覆盖onChange时，value必填
    if (props.onChange && !props.hasOwnProperty('value')) {
      this.state.isvalid = false
      console.warn('LimitTextArea：绑定onChange时，value属性必填，否则显示最大输入字符数将失效!')
    }
  }

  // 若外部定义了onChange事件，handleChange将会被覆盖
  handleChange = (e) => {
    const val = e.target.value
    this.setState({
      val
    })
  }

  render () {
    const { maxLength: defaultMax, isvalid } = this.state
    const { sep, maxLength, value, ...restProps } = this.props
    const max = maxLength > 0 ? maxLength : defaultMax
    /** form组件中，value有值 */
    const arr = (value || this.state.val).split(sep)
    const len = arr.length > max ? max : arr.length
    /**截取最大字符串 */
    const val = arr.slice(0, len).join(sep)
    const n = val ? len : 0
    const suffix = `${n}/${max}`

    return isvalid ? (
      <div className={'block'}>
        <TextArea 
          onChange={ e => this.handleChange(e) } 
          value={val}
          { ...restProps }
        />
        <span className={'counter'}>{suffix}</span>
      </div>
    ) : <TextArea { ...this.props } />
  }
}

LimitTextArea.defaultProps = {
  /** 分割符
   * 可以是个字符串，如：'\n'
   * 也可以是个正则表达式，如：/\n\r/
   */
  sep: ''
}

export default LimitTextArea