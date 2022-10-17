import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../style/all-foods.css";
import "../style/pagination.css";
import { useState } from "react";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm === "") return item;
    // console.log(searchTerm);
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  // console.log(visitedPage);
  // console.log(pageNumber);
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const handleChangePage = (event) => {
    const selected = event.selected;
    setPageNumber(selected);
  };

  const handleChangeInput = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="type"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(event) => handleChangeInput(event)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option> Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">Hight Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item}></ProductCard>
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={(event) => handleChangePage(event)}
                nextLabel="Next >"
                previousLabel="< Pre"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
