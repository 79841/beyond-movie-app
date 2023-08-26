import React, { Suspense, useEffect, useState } from "react";
import searchMovies from "../query/search";
import Movie from "../components/Movie";
import styled from "styled-components";
import LoadingBox, { LoadingBoxes } from "../components/LoadingBox";
import useImagesPreloader from "../hooks/useImagesPreloader";
import { moviePostersPreload } from "../utils/imagePreload";
// import SearchedMovies from "../components/search/SearchedMovies";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

const SearchedMovies = React.lazy(() =>
  import("../components/search/SearchedMovies")
);

const Search = () => {
  const [movies, setMovies] = useState([]);
  // const [imagesLoaded, setImagePaths] = useImagesPreloader([]);

  const handleChange = async ({ target }) => {
    if (target.value === "") {
      setMovies([]);
      return;
    }
    const movies = await searchMovies(target.value);
    setMovies(movies);
  };

  // useEffect(() => {
  //   setImagePaths(() =>
  //     movies
  //       .map((movie) => movie.poster_path)
  //       .filter((posterPath) => posterPath !== null)
  //   );
  // }, [movies, setImagePaths]);

  useEffect(() => {
    moviePostersPreload(movies, 1000);
  });

  return (
    <Container>
      <SearchInputBox
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />

      {/* <MoviesContainer>
        {imagesLoaded ? (
          <>
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
          </>
        ) : (
          <LoadingBoxes width="10rem" height="18rem" />
        )}
      </MoviesContainer> */}
      <Suspense fallback={<h1>loading...</h1>}>
        <SearchedMovies movies={movies} />
      </Suspense>
    </Container>
  );
};

export default Search;
