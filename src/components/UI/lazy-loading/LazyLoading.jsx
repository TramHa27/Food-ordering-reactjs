import React from "react";
import loaderImg from "../../../assets/images/spinner.svg";
import "../../../style/loading.css";
import ReactDOM from "react-dom";
const LazyLoading = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default LazyLoading;
