import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import { Popconfirm } from "antd";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/cart-page.css";
import { deleteItemAction } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title=" Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
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
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr key={index} item={item} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div className="mt-4">
                <h6>
                  Subtotal:
                  <span className="cart__subtotal m-5">${totalAmount}</span>
                </h6>
                <p className="mt-3">
                  Taxes and shipping will calculate at checkout
                </p>
                <div className="cart__page-btn ">
                  <Link to="/foods">
                    <button className="addToCart__btn me-4 w-100">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button className="addToCart__btn w-100 mt-5">
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  //Lấy props từ ở trên
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="..." />
      </td>
      <td className="text-center" style={{ verticalAlign: "middle" }}>
        {title}
      </td>
      <td className="text-center" style={{ verticalAlign: "middle" }}>
        ${price}
      </td>
      <td className="text-center" style={{ verticalAlign: "middle" }}>
        {quantity}pcs
      </td>

      <td className="text-center" style={{ verticalAlign: "middle" }}>
        <Popconfirm
          placement="top"
          title="Do you want to remove this product from cart ?"
          onConfirm={() => {
            const action = deleteItemAction(id);
            dispatch(action);
          }}
          okText="OK"
          cancelText="Cancel"
        >
          <i className="ri-delete-bin-line  cart__item-del"></i>
        </Popconfirm>
      </td>
    </tr>
  );
};

export default Cart;
