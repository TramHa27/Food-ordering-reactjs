import { Spin } from "antd";
import React from "react";

export const LazyLoading = () => {
  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

export const LazyButtonLoading = () => {
  return (
    <>
      <Spin size="small" />
    </>
  );
};
