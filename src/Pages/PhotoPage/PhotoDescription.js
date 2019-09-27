import React from "react";
import { Title, Text } from "./style";
export default function PhotoDescription({ image }) {
  return (
    <>
      <Title>{image.title}</Title>
      <Text>{image.description}</Text>
    </>
  );
}
