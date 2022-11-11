import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import LazyLoading from "../components/UI/lazy-loading/LazyLoading";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    // console.log(values);
    setLoading(true);
    const email = values.email;
    const password = values.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        toast.success("Successfully logged in");
        navigate("/checkout");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        setLoading(false);
        toast.error("Wrong username or password");
      });
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title=" Login">
      {loading && <LazyLoading />}
      <h5 className="container-login text-center mt-3 mb-4">
        Login into your account
      </h5>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input size="large" placeholder="Enter your email" />
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
          <Input.Password size="large" placeholder="Enter your Password" />
        </Form.Item>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Form.Item name="remember" noStyle valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div
            onClick={() => navigate("/reset-password")}
            className="login-form-forgot text-primary fst-italic"
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
    </Helmet>
  );
};

export default Login;
