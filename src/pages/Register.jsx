import { Button, Form, Input } from "antd";
import Helmet from "../components/Helmet/Helmet";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import LazyLoading from "../components/UI/lazy-loading/LazyLoading";

// import { handleSignUp } from "../../../services/UserService";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    const email = values.email;
    const password = values.password;
    const cPassword = values.confirmPassword;
    if (password !== cPassword) {
      toast.error("Password do not match!");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setLoading(false);
        toast.success("Account created");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Register is unsuccessful");
        // ..
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Helmet title=" Register">
      {loading && <LazyLoading />}
      <h5 className="text-lg text-center font-bold mt-3 mb-4">
        Register for create account
      </h5>

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(values) => onFinish(values)}
        autoComplete="off"
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
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
              message: "Password must be at least 6 characters",
              min: 6,
              max: 99,
            },
          ]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Password must be at least 6 characters",
              min: 6,
              max: 99,
            },
          ]}
        >
          <Input.Password size="large" placeholder="Confirm Password" />
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
    </Helmet>
  );
};

export default Register;
