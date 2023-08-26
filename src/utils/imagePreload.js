import { BASE_IMAGE_URL } from "../const";
const imagesPreload = (imagePaths, delay = 1000) => {
  let imagesLoaded = false;
  if (imagePaths.length === 0) return;

  const promiseImages = imagePaths.map(
    (imagePath) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = `${BASE_IMAGE_URL}${imagePath}`;
      })
  );

  const suspender = Promise.all(promiseImages)
    .then(() => {
      setTimeout(() => {
        imagesLoaded = true;
      }, delay);
    })
    .catch((error) => {
      console.error("Image loading failed:", error);
    });

  // return {
  //   read() {
  //     if (imagesLoaded === false) {
  //       throw suspender;
  //     } else {
  //       return imagesLoaded;
  //     }
  //   },
  // };
};

export const moviePostersPreload = (movies, delay) => {
  const posterPaths = movies
    .map((movie) => movie.poster_path)
    .filter((posterPath) => posterPath !== null);

  return imagesPreload(posterPaths, delay);
};
export default imagesPreload;
