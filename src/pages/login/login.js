import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox,message } from "antd";
import { withRouter } from 'react-router'
import "./login.css";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let history = this.props.history
    console.log(history)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        if(values.username=='admin'&&values.password=='123456'){
          history.push('/home');
        }else{
          message.error('账号或密码错误',2.5);
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
        <div className="antd-title">后台管理</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!(admin)" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username(admin)"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!(123456)" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password(123456)"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "login" })(Login);
export default withRouter(WrappedNormalLoginForm);
