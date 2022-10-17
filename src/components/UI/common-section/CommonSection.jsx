import React from "react";
import { Container } from "reactstrap";

import "../../../style/common-section.css";

const CommonSection = (props) => {
  //truyền props từ AllFoods
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
