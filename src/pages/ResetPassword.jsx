import { Button, Form, Input } from "antd";
import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import LazyLoading from "../components/UI/lazy-loading/LazyLoading";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFinish = (values) => {
    setIsLoading(true);
    const email = values.email;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <LazyLoading />}
      <h5 className="text-center mt-4 mb-4">Forgot your password?</h5>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
        <Button
          htmlType="submit"
          className="bg-black mt-3 mb-3"
          type="primary"
          block
          size="large"
        >
          Reset Password
        </Button>
      </Form>
      <p
        className="text-primary fst-italic mt-2 text-center"
        onClick={() => navigate("/login")}
        style={{ cursor: "pointer" }}
      >
        Back to Login
      </p>
    </>
  );
};
