import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../store/shopping-cart/cartSlice";

import "../../../style/product-card.css";
import { useAuth } from "../../../firebase";

const ProductCard = (props) => {
  //Lấy item từ cha là home product, all foods
  const { id, title, image01, price } = props.item;
  const navigate = useNavigate();
  const currentUser = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="product__item">
      <Link to={`/food/${id}`}>
        <div className="product__img align-items-center justify-content-between  ">
          <img src={image01} alt="product-img" className="w-50" />
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="product__content">
        <div className="d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button
            className="addToCart__btn"
            onClick={() => {
              if (currentUser) {
                const itemCart = {
                  ...props.item,
                  quantity: 1,
                  totalPrice: props.item.price,
                };
                const action = addToCartAction(itemCart);
                dispatch(action);
              } else {
                navigate("/login");
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
