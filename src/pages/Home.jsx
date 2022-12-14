import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../style/hero-section.css";
import "../style/home.css";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg04 from "../assets/images/all.png";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
import { useState, useEffect } from "react";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, magnam!",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, magnam!",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, magnam!",
  },
];

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [category, setCategory] = useState("ALL");
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title=" Home">
      {/* hero__content */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br />
                  food at <span> your door</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  autem dolorum mollitia magni earum non!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/foods">Order now</Link>
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn ">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Category */}
      <section className="pt-0">
        <Category />
      </section>
      {/* Features */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                nam.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, recusandae?
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-2 p-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Product */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`d-flex align-items-center gap-2 all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  <img src={foodCategoryImg04} alt="foodCategory" />
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="foodCategory" /> Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="foodCategory" /> Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="foodCategory" /> Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Why choose us */}
      <section className="why__chose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4 mt-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  ullam quisquam pariatur assumenda nihil esse. Dolore ea facere
                  cupiditate recusandae doloremque. Nesciunt, maiores. Soluta
                  necessitatibus, ipsam sint mollitia fugit nulla!
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat, amet.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Cum, doloremque.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, neque!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Hot pizza */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4 ">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  minus excepturi vel odit dolores alias delectus nisi
                  asperiores! Eveniet, nulla.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
