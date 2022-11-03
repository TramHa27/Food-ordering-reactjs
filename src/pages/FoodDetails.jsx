import React from "react";

import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../style/product-detail.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");

  const [enteredName, setEnteredName] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");

  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-5"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-5"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="product__images">
                <div className="single__product-content">
                  <h2 className="product__title mb-3">{title}</h2>
                  <p className="product__price">
                    Price: <span>${price}</span>
                  </p>
                  <p className="category mb-5">
                    Category: <span>{category}</span>
                  </p>
                  <button
                    className="addToCart__btn"
                    onClick={() => {
                      const itemCart = { ...product, quantity: 1 };
                      const action = addToCartAction(itemCart);
                      dispatch(action);
                    }}
                  >
                    Add to cart{" "}
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review mt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">john1@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">john1@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">john1@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>
                  <form
                    className="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={6}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
