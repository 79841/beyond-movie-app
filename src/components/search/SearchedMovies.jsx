import { styled } from "styled-components";
import Movie from "../Movie";
import imagesPreload, { moviePostersPreload } from "../../utils/imagePreload";
import { useEffect } from "react";

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
  min-width: 50rem;
  max-width: 100%;
`;

const SearchedMovies = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          poster={movie.poster_path}
          width={"10rem"}
          height={"18rem"}
        />
      ))}
    </MoviesContainer>
  );
};

export default SearchedMovies;
