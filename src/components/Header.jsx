import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Logo>MoviZ</Logo>
    </Container>
  );
};

export default Header;
