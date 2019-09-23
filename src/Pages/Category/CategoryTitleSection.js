import React from "react";
import Container from "@material-ui/core/Container";
import {
  CategoryFirstWrapper,
  MainTitle,
} from "./style";
export default function CategoryTitleSection({ category: { name, label } }) {
  return (
    <Container maxWidth='xl'>
      <CategoryFirstWrapper>
        <img src={`${label}`} alt={name} />
        <MainTitle>{name}</MainTitle>
      </CategoryFirstWrapper>
    </Container>
  );
}
