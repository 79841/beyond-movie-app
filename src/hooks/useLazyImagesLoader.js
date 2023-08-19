import { useState } from "react";
import { BASE_IMAGE_URL } from "../const";

const useLazyImagesLoader = (movies) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  if (movies === []) {
    setImagesLoaded(true);
    return imagesLoaded;
  }

  movies.map((movie) =>
    setImageUrls([...imageUrls, `${BASE_IMAGE_URL}${movie.poster_path}`])
  );

  const promiseImages = imageUrls.map(
    (url) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
      })
  );

  Promise.all(promiseImages)
    .then(() => {
      setImagesLoaded(true);
    })
    .catch((error) => {
      console.error("Image loading failed:", error);
    });

  return imagesLoaded;
};

export default useLazyImagesLoader;
