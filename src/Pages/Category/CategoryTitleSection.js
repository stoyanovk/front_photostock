import React from "react";
import Container from "@material-ui/core/Container";
import { CategoryFirstWrapper, MainTitle } from "./style";
import {url} from '../../utils'
export default function CategoryTitleSection({ category: { name, label } }) {
  console.log('render category title');
  return (
    <Container maxWidth='xl'>
      <CategoryFirstWrapper>
        <img src={`${url}${label}`} alt={name} />
        <MainTitle>{name}</MainTitle>
      </CategoryFirstWrapper>
    </Container>
  );
}
