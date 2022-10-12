import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../style/cart-item.css";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  changeQuantityAction,
  deleteItemAction,
} from "../../../store/shopping-cart/cartSlice";

const CartItem = (props) => {
  //truyền props từ carts
  const { id, title, price, image01, quantity, totalPrice } = props.item;

  const dispatch = useDispatch();

  return (
    <ListGroupItem
      className="cart__item"
      style={{
        borderBottom: "1px solid #df2020",
        borderLeft: "none",
        borderTop: "none",
      }}
    >
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title} </h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${price}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span
                className="decrease__btn"
                onClick={() => {
                  const action = changeQuantityAction(id);
                  dispatch(action);
                }}
              >
                <i className="ri-subtract-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span
                className="increase__btn"
                onClick={() => {
                  const itemCart = { ...props.item };
                  const action = addToCartAction(itemCart);
                  dispatch(action);
                }}
              >
                <i className="ri-add-line"></i>
              </span>
            </div>
          </div>
          <span
            className="delete__btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              const action = deleteItemAction(id);
              dispatch(action);
            }}
          >
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
