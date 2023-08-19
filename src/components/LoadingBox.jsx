import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => width || "30rem"};
  height: ${({ height }) => height || "60rem"};
  margin: 1rem;
`;

const ImageLoadingBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
`;

const LoadingBox = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <ImageLoadingBox>Loading...</ImageLoadingBox>
    </Container>
  );
};

export default LoadingBox;
