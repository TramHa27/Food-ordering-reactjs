import { Button, Form, Input } from "antd";
import Helmet from "../components/Helmet/Helmet";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { LazyLoading } from "../components/UI/lazy-loading/LazyLoading";

// import { handleSignUp } from "../../../services/UserService";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    // console.log(values);
    const email = values.email;
    const password = values.password;
    // dispatch(
    //   handleSignUp(values, () => navigate("/register/register-success"))
    // );
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        console.log(user);
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

  return (
    <Helmet title=" Register">
      <h5 className="text-lg text-center font-bold mt-3 mb-4">
        Register for create account
      </h5>
      {loading ? (
        <div className="text-center mt-4 mb-4">
          <LazyLoading />
        </div>
      ) : (
        <>
          {" "}
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
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
        </>
      )}
    </Helmet>
  );
};

export default Register;
