import React, { useState } from "react";
import { useEffect } from "react";
import { getGenres, getMoviesByGenre } from "../query/genre";
import { styled } from "styled-components";
import Movie from "../components/Movie";

import useImagesPreloader from "../hooks/useImagesPreloader";
import MoviesByGenre from "../components/genre/MoviesByGenre";

const GenresContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Genre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  return (
    <GenresContainer>
      {genres.map((genre) => (
        <MoviesByGenre key={genre.id} genre={genre} />
      ))}
    </GenresContainer>
  );
};

export default Genre;
