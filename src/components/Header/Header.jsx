import React from "react";
import { Avatar, Badge, Button, Dropdown, Menu } from "antd";
import { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";

import { toggle } from "../../store/shopping-cart/cartUiSlice";

import "../../style/header.css";
import { toast } from "react-toastify";
import { useState } from "react";
const nav__links = [
  {
    display: "Home",
    path: "home",
  },
  {
    display: "Foods",
    path: "foods",
  },
  {
    display: "Cart",
    path: "cart",
  },
  {
    display: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const [displayName, setDisplayName] = useState("");
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  //useRef to show menu mobile
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  //useEffect to show the header__shrink
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  //Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName);
        setDisplayName(user.displayName);
      } else {
        // User is signed out
        setDisplayName("");
      }
    });
  }, []);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <div onClick={() => navigate("/cart")}>Purchase Order</div>,
        },
        {
          key: "2",
          label: (
            <NavLink to="/" onClick={logoutUser}>
              Logout
            </NavLink>
          ),
        },
      ]}
    />
  );

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </NavLink>

          {/* =========== Menu ============ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ==============Nav right icon ==============  */}
          <div className="nav__right d-flex align-items-center  gap-2">
            <span className="container-item-menu" style={{ cursor: "pointer" }}>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button
                  icon={
                    <Avatar
                      className="m-2"
                      size="large"
                      // src={`${
                      //   currentUser?.photoURL
                      //     ? currentUser?.photoURL
                      //     : `https://i.pravatar.cc/50/${currentUser?.uid}`
                      // }`}
                      src={`https://i.pravatar.cc/50/`}
                    />
                  }
                >
                  {/* {dimensions.width < 500
                    ? ""
                    : currentUser?.reloadUserInfo?.displayName
                    ? currentUser.reloadUserInfo.displayName
                    : currentUser?.email.split("@")[0]} */}
                  <span className="fs-5">Adam</span>
                </Button>
              </Dropdown>
              {/* <p onClick={() => navigate("/login")} className="text-center">
                Sign In | Sign Up
              </p> */}
            </span>
            <span
              className="cart__icon"
              onClick={() => {
                dispatch(toggle());
              }}
            >
              <i className="ri-shopping-bag-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            {/* <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span> */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
