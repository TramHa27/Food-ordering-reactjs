import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/res-logo.png";
// import { handleFacebookSignIn, handleGoogleSignIn } from "../../firebase";
import "./usertemplate.css";

const UserTemplate = () => {
  const location = useLocation();

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
                className="user-template_info_text text-center"
                style={{ position: "relative" }}
              >
                Or Login With
              </p>
            </div>
            <div className="d-flex align-items-center">
              <Button
                className="me-4"
                type="default"
                icon={<GoogleOutlined />}
                size="large"
                // onClick={handleGoogleSignIn}
              >
                <span>Google</span>
              </Button>
              <Button
                className="ms-3"
                type="text "
                icon={<FacebookOutlined />}
                size="large"
                // onClick={handleFacebookSignIn}
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
