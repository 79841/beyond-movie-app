import styled from "styled-components";
import Movie from "../Movie";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../../query/genre";
import useImagesPreloader from "../../hooks/useImagesPreloader";
import { LoadingBoxes } from "../LoadingBox";

const GenreContainer = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }
`;

const MoviesByGenreContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 19rem;
`;

const MoviesByGenre = ({ genre }) => {
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [imagesLoaded, setImagePaths] = useImagesPreloader([], 1000);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const movies = await getMoviesByGenre(genre.id);
      setMoviesByGenre(movies);
    };
    fetchMoviesByGenre();
  }, [genre.id]);

  useEffect(() => {
    setImagePaths(
      moviesByGenre
        .map((movie) => movie.poster_path)
        .filter((posterPath) => posterPath !== null)
    );
  }, [moviesByGenre, setImagePaths]);

  return (
    <GenreContainer>
      <h2>{genre.name}</h2>
      <MoviesByGenreContainer>
        {imagesLoaded ? (
          <>
            {moviesByGenre.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                width="9rem"
                height="15rem"
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))}
          </>
        ) : (
          <LoadingBoxes width={"9rem"} height={"15rem"} />
        )}
      </MoviesByGenreContainer>
    </GenreContainer>
  );
};

export default MoviesByGenre;
