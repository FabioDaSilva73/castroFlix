import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import Footer from "../Footer";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;

`;

export default props => (
    <>
      <Menu />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )