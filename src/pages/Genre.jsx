import React, { useState } from "react";
import { useEffect } from "react";
import { getGenres, getMoviesByGenre } from "../query/genre";
import { styled } from "styled-components";
import Movie from "../components/Movie";

const GenreContainer = styled.div`
  padding: 1rem;
`;

const MoviesByGenreContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MoviesByGenre = ({ genre, movies }) => {
  return (
    <GenreContainer>
      <h2>{genre}</h2>
      <MoviesByGenreContainer>
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            width="8rem"
            height="15rem"
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </MoviesByGenreContainer>
    </GenreContainer>
  );
};

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenres, setMoviesByGenres] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMoviesbyGenres = async () => {
      genres.map(async (genre) => {
        const movies = await getMoviesByGenre(genre.id);
        setMoviesByGenres((prev) => ({ ...prev, [genre.name]: movies }));
      });
    };
    fetchMoviesbyGenres();
  }, [genres]);

  return (
    <div>
      {Object.entries(moviesByGenres).map((e, i) => {
        console.log(e);
        return (
          <div>
            <MoviesByGenre genre={e[0]} movies={e[1].results} />
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
