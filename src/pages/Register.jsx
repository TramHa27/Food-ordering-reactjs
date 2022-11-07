import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { handleSignUp } from "../../../services/UserService";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h5 className="text-lg text-center font-bold mt-3 mb-4">
        Register for create account
      </h5>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
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
        <Form.Item>
          <Button
            className="bg-black"
            type="primary"
            htmlType="submit"
            block
            size="large"
            // disabled={isLazyLoading}
          >
            REGISTER
          </Button>
          <div className="mt-4">
            <Button
              className="bg-gray-400"
              type="danger"
              block
              size="large"
              onClick={() => navigate("/login")}
            >
              ALREADY HAS AN ACCOUNT
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
