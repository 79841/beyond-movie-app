import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;

  ul {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  &:hover {
    color: white;
  }
`;

const Nav = () => {
  return (
    <nav>
      <Container>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/genre">Genre</StyledLink>
          </li>
          <li>
            <StyledLink to="/search">Search</StyledLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
