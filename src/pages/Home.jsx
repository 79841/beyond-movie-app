import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { getTrending } from "../query/trending";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1rem;
`;

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrending();
      setTrendingMovies(movies);
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <MovieContainer>
        {trendingMovies.map((movie) => (
          <Movie
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
            overview={movie.overview}
            // width="25%"
            // height="30%"
          />
        ))}
      </MovieContainer>
    </>
  );
};

export default App;
