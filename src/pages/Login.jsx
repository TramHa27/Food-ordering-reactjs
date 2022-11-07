import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h5 className="container-login text-center mt-3 mb-4">
        Login into your account
      </h5>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input size="large" placeholder="Your email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Form.Item
            name="remember"
            noStyle
            // valuePropName='checked'
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div
            onClick={() => navigate("/reset-password")}
            className="login-form-forgot text-primary"
          >
            Forgot?
          </div>
        </div>
        <Form.Item>
          <Button
            className="bg-black"
            type="primary"
            htmlType="submit"
            block
            size="large"
            // disabled={isLazyLoading}
          >
            LOGIN
          </Button>
          <div className="mt-4">
            <Button
              className="bg-gray-400"
              type="danger"
              block
              size="large"
              onClick={() => navigate("/register")}
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
