import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import {withConsumer} from '../../HOC'
import CategoryTitleSection from './CategoryTitleSection';
import CategoryGallery from './CategoryGallery';

const Category = ({ id,value:{categories} }) => {
  const category = categories.find((item) => (item.id === id));
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <CategoryTitleSection category={category} />
        <CategoryGallery category={category}/>
      </Container>
    </PageWrapper>
  );
}
export default withConsumer(Category)