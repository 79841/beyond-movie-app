import { useEffect, useState } from "react";
import { BASE_IMAGE_URL } from "../const";

const useImagesPreloader = (initValue, delay = 1000) => {
  const [imagePaths, setImagePaths] = useState(initValue);
  const [imagesLoaded, setImagesLoaded] = useState(true);
  useEffect(() => {
    if (imagePaths.length === 0) {
      setImagesLoaded(true);
      return;
    } else if (imagePaths.length > 0) {
      setImagesLoaded(false);
    }

    const promiseImages = imagePaths.map(
      (imagePath) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = `${BASE_IMAGE_URL}${imagePath}`;
        })
    );

    Promise.all(promiseImages)
      .then(() => {
        setTimeout(() => {
          setImagesLoaded(true);
        }, delay);
      })
      .catch((error) => {
        console.error("Image loading failed:", error);
      });
  }, [imagePaths, delay]);

  return [imagesLoaded, setImagePaths];
};

export default useImagesPreloader;
