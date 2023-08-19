const getTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjM3NmI1MTJmMWQ0M2IxMzdhY2FlNDlhM2JjYWU1OSIsInN1YiI6IjYyY2Y2NjU5ZmNmOTA3MDA0ZGJkZDM3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyMV442zfVh2PMvjBFl8Ghpou_yBpbxMpRqj3b2cw2o",
    },
  };

  const movies = await (await fetch(url, options)).json();
  return movies.results;
};

export { getTrending };
