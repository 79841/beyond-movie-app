import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Nav from "./components/Nav";
import Genre from "./pages/Genre";
import Header from "./components/Header";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 16rem;
  background-color: #eee;
`;

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/genre" element={<Genre />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
