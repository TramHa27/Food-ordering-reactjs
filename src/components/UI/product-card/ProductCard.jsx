import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/shopping-cart/cartSlice";

import "../../../style/product-card.css";

const ProductCard = (props) => {
  //Lấy item từ cha là home product
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/food/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button
            className="addToCart__btn"
            onClick={() => {
              const itemCart = {
                ...props.item,
                quantity: 1,
                totalPrice: props.item.price,
              };
              const action = addToCart(itemCart);
              dispatch(action);
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
