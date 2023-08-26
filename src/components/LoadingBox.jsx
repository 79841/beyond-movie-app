import React from "react";
import styled from "styled-components";

const ImageLoadingBox = styled.div`
  min-width: ${({ width }) => width || "20rem"};
  height: ${({ height }) => height || "40rem"};
  margin: 1rem;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
`;

const LoadingBox = ({ width, height }) => {
  return (
    <ImageLoadingBox width={width} height={height}>
      Loading...
    </ImageLoadingBox>
  );
};

export const LoadingBoxes = ({ width = "20rem", height = "40rem" }) => {
  return Array.from({ length: 20 }).map((_, i) => (
    <LoadingBox width={width} height={height} key={i} />
  ));
};

export default LoadingBox;
