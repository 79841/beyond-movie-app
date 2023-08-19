const getGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM3NmI1MTJmMWQ0M2IxMzdhY2FlNDlhM2JjYWU1OSIsInN1YiI6IjYyY2Y2NjU5ZmNmOTA3MDA0ZGJkZDM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyMV442zfVh2PMvjBFl8Ghpou_yBpbxMpRqj3b2cw2o",
    },
  };

  const { genres } = await (await fetch(url, options)).json();
  return genres;
};

const getMoviesByGenre = async (genreId) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM3NmI1MTJmMWQ0M2IxMzdhY2FlNDlhM2JjYWU1OSIsInN1YiI6IjYyY2Y2NjU5ZmNmOTA3MDA0ZGJkZDM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyMV442zfVh2PMvjBFl8Ghpou_yBpbxMpRqj3b2cw2o",
    },
  };

  const result = await (await fetch(url, options)).json();
  return result;
};

export { getGenres, getMoviesByGenre };
