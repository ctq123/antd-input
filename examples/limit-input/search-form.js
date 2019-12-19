import React from 'react'
import { Form, Row, Col, Button } from 'antd'
import { LimitInput } from '../../src'

const FormItem = Form.Item

const SearchForm = (props) => {

  const submitSearch = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values)
    })
  }

  const { form } = props
  const { getFieldDecorator } = form
  const style = { width: '100%' }

  return (
    <Form style={style} onSubmit={submitSearch}>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem label={`名称`} style={{ display: 'flex' }}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: `名称不能为空`,
                  whitespace: true,
                },
              ],
            })(<LimitInput size="large" placeholder={'请输入名称'}/>)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label={''}>
            <Button type="primary" htmlType="submit" size="large">Search</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  )
}

export default Form.create()(SearchForm)