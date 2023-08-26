import React from "react";
import { BASE_IMAGE_URL } from "../const";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  width: ${({ width }) => width || "20rem"};
  height: ${({ height }) => height || "40rem"};
  margin: 1rem;
  margin-bottom: 3rem;
`;

const MovieLink = styled.a`
  width: 100%;
  height: 85%;
  margin-bottom: 5%;
  text-decoration: none;
`;

const Poster = styled.img`
  width: ${({ width }) => width || "100%"};
  height: 100%;
  object-fit: cover;
`;

const NoPoster = styled.div`
  width: ${({ width }) => width || "100%"};
  height: 100%;
  background-color: #ccc;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: fantasy;
`;

const MovieInfo = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
`;

const MovieRating = styled.div`
  color: red;
`;

const MovieTitle = styled.div`
  text-align: center;
`;

const Movie = ({ id, title, poster, overview, rating, width, height }) => {
  return (
    <Container width={width} height={height}>
      <MovieLink
        href={`https://www.themoviedb.org/movie/${id}`}
        target={"_blank"}
        rel="noreferrer"
      >
        {poster ? (
          <Poster width={width} src={BASE_IMAGE_URL + poster} alt={title} />
        ) : (
          <NoPoster>No Poster</NoPoster>
        )}
      </MovieLink>
      <MovieInfo>
        <MovieRating className="rating">{rating}</MovieRating>
        <MovieTitle className="title">{title}</MovieTitle>
        {overview ? <div className="overview">{overview}</div> : null}
      </MovieInfo>
    </Container>
  );
};

export default Movie;
