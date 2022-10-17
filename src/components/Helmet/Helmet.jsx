import React from "react";

const Helmet = (props) => {
  // console.log(props);
  //Lấy props từ home, cart...
  const { title, children } = props;

  document.title = "Food ordering app -" + title;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
