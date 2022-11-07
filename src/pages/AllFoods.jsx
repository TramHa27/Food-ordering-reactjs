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

  const [productsData, setProductsData] = useState(products);
  console.log(productsData);

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
  const displayPage = productsData.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(productsData.length / productPerPage);

  const handleChangePage = (event) => {
    const selected = event.selected;
    setPageNumber(selected);
  };

  const handleChangeInput = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
    setProductsData(searchedProduct);
  };

  const handleChangeFilter = (e) => {
    const filterValue = e.target.value;
    // console.log(filterValue);
    if (filterValue === "Pizza") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Burger") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Bread") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setProductsData(filteredProducts);
    }
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget">
                <select className="w-100" onChange={handleChangeFilter}>
                  <option> Filter By Category</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                  <option value="Bread">Bread</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <div
                className="search__widget d-flex align-items-center justify-content-between w-50"
                style={{ float: "Right" }}
              >
                <input
                  className="w-100"
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
            {displayPage.length === 0 ? (
              <h1 className="text-center fs-4">No products are found</h1>
            ) : (
              displayPage.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item}></ProductCard>
                </Col>
              ))
            )}
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
