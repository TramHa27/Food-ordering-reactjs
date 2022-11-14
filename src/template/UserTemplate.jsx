import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/res-logo.png";
import "./usertemplate.css";
import { useSelector } from "react-redux";
import { auth, google, facebook } from "../firebase.js";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserTemplate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginSocial = async (provider) => {
    const res = await signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="user-template d-flex align-items-center justify-content-center">
      <div className="user-template_info rounded bg-white">
        <div className="text-center">
          <img className="w-25" src={logo} alt="logo" />
        </div>
        <Outlet />
        {(location.pathname === "/login" ||
          location.pathname === "/register") && (
          <>
            <div>
              <p
                className="user-template_info_text text-center fst-italic"
                style={{ position: "relative" }}
              >
                Or Login With
              </p>
            </div>
            <div className="user-template-social d-flex align-items-center justify-content-between">
              <Button
                className=" user-template-btn w-50"
                type="default"
                icon={<GoogleOutlined />}
                size="large"
                onClick={() => loginSocial(google)}
              >
                <span>Google</span>
              </Button>
              <Button
                className="user-template-btn"
                type="text "
                icon={<FacebookOutlined />}
                size="large"
                onClick={() => loginSocial(facebook)}
              >
                <span> Facebook</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserTemplate;
