import React, { useEffect, useState } from "react";
import searchMovies from "../query/search";
import Movie from "../components/Movie";
import styled from "styled-components";
// import useLazyImagesLoader from "../hooks/useLazyImagesLoader";
import { BASE_IMAGE_URL } from "../const";
import LoadingBox from "../components/LoadingBox";

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

const LoadingBoxes = ({ width, height }) => {
  return Array.from({ length: 20 }).map((_, i) => (
    <LoadingBox width={width} height={height} />
  ));
};

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleChange = async ({ target }) => {
    if (target.value === "") {
      setMovies([]);
      return;
    }
    const movies = await searchMovies(target.value);
    setMovies(movies);
  };

  useEffect(() => {
    if (movies === []) {
      setImagesLoaded(true);
      return;
    }
    setImagesLoaded(false);
    const moviesWithPoster = movies.filter(
      (movie) => movie.poster_path !== null
    );
    const promiseImages = moviesWithPoster.map(
      (movie) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = `${BASE_IMAGE_URL}${movie.poster_path}`;
        })
    );

    Promise.all(promiseImages)
      .then(() => {
        setTimeout(() => {
          setImagesLoaded(true);
        }, 1000);
      })
      .catch((error) => {
        console.error("Image loading failed:", error);
      });
  }, [movies]);

  return (
    <Container>
      <SearchInputBox
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <MoviesContainer>
        {imagesLoaded ? (
          <>
            {movies.map((movie) => (
              <Movie
                title={movie.title}
                rating={movie.vote_average}
                poster={movie.poster_path}
                width={"10rem"}
                height={"18rem"}
              />
            ))}
          </>
        ) : (
          <LoadingBoxes width="10rem" height="18rem" />
        )}
      </MoviesContainer>
    </Container>
  );
};

export default Search;
