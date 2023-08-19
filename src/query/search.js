const searchMovies = async (keyword) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM3NmI1MTJmMWQ0M2IxMzdhY2FlNDlhM2JjYWU1OSIsInN1YiI6IjYyY2Y2NjU5ZmNmOTA3MDA0ZGJkZDM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyMV442zfVh2PMvjBFl8Ghpou_yBpbxMpRqj3b2cw2o",
    },
  };

  const { results: movies } = await (await fetch(url, options)).json();
  console.log(movies);
  return movies;
};

export default searchMovies;
