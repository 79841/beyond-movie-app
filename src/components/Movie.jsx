import React from "react";
import { BASE_IMAGE_URL } from "../const";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  width: ${({ width }) => width || "30rem"};
  height: ${({ height }) => height || "60rem"};
  margin: 1rem;
`;

const MovieLink = styled.a`
  width: 100%;
  height: 80%;
  margin-bottom: 5%;
`;

const Poster = styled.img`
  width: ${({ width }) => width || "100%"};
  height: 100%;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movie = ({ id, title, poster, overview, rating, width, height }) => {
  return (
    <Container width={width} height={height}>
      <MovieLink
        href={`https://www.themoviedb.org/movie/${id}`}
        target={"_blank"}
        rel="noreferrer"
      >
        <Poster width={width} src={BASE_IMAGE_URL + poster} alt={title} />
      </MovieLink>
      <MovieInfo>
        <div className="rating">{rating}</div>
        <div className="title">{title}</div>
        {overview ? <div className="overview">{overview}</div> : null}
      </MovieInfo>
    </Container>
  );
};

export default Movie;
