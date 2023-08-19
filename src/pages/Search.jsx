import React, { useEffect, useState } from "react";
import searchMovies from "../query/search";
import Movie from "../components/Movie";
import styled from "styled-components";
import useLazyImagesLoader from "../hooks/useLazyImagesLoader";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const SearchInputBox = styled.input`
  border: 5px solid #aaa;
  border-radius: 5px;
  width: 50rem;
  height: 2rem;
  font-size: 1.2rem;
  font-family: fantasy;
  padding-left: 0.5%;
  &:focus {
    outline: none;
  }
`;

const Search = () => {
  const [movies, setMovies] = useState([]);
  //   const [imagesLoaded, setImagesLoaded] = useState(false);

  //   const imagesLoaded = useLazyImagesLoader(movies);
  const imagesLoaded = true;

  const handleChange = async ({ target }) => {
    if (target.value === "") {
      setMovies([]);
      return;
    }
    const movies = await searchMovies(target.value);
    setMovies(movies);
  };

  //   useEffect(() => {
  // setImagesLoaded(useLazyImagesLoader(movies));
  //   }, [movies]);

  return (
    <Container>
      <SearchInputBox
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      {imagesLoaded ? (
        <MoviesContainer>
          {movies.map((movie) => (
            <Movie
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
              width={"10rem"}
              height={"18rem"}
            />
          ))}
        </MoviesContainer>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default Search;
