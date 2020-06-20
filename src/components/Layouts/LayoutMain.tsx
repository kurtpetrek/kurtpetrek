import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default LayoutMain;
