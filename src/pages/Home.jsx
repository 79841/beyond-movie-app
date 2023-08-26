import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { getTrending } from "../query/trending";
import styled from "styled-components";
import useImagesPreloader from "../hooks/useImagesPreloader";
import { LoadingBoxes } from "../components/LoadingBox";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
  min-width: 50rem;
  max-width: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [imagesLoaded, setImagePaths] = useImagesPreloader([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrending();
      setTrendingMovies(movies);
    };
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    setImagePaths(() =>
      trendingMovies
        .map((movie) => movie.poster_path)
        .filter((posterPath) => posterPath !== null)
    );
  }, [trendingMovies, setImagePaths]);

  return (
    <>
      <MovieContainer>
        {imagesLoaded ? (
          <>
            {trendingMovies.map((movie) => (
              <Movie
                title={movie.title}
                rating={movie.vote_average}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </>
        ) : (
          <LoadingBoxes />
        )}
      </MovieContainer>
    </>
  );
};

export default App;
