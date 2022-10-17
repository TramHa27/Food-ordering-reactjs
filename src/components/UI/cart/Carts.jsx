import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../../../style/shopping-cart.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../store/shopping-cart/cartUiSlice";

const Carts = (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span
            onClick={() => {
              dispatch(toggle());
            }}
          >
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <div>
              <span className="cart__item-none d-flex align-items-center justify-content-center">
                <i className="ri-shopping-cart-2-line "></i>
              </span>

              <h6 className="text-center mt-2" style={{ color: "#df2020" }}>
                No item added to the cart
              </h6>
              <Link
                to="/foods"
                className="d-flex gap-1 justify-content-center mt-4 cart__item-shop"
              >
                <span className="fw-bold fs-6">Go to shop </span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">Check out</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
