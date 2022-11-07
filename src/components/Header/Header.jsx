import React from "react";
import { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { toggle } from "../../store/shopping-cart/cartUiSlice";

import "../../style/header.css";
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
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

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
          <div className="nav__right d-flex align-items-center gap-3">
            <span
              className="cart__icon"
              onClick={() => {
                dispatch(toggle());
              }}
            >
              <i className="ri-shopping-bag-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="cart__icon">
              <i className="ri-heart-fill "></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
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
