import React, { useState, useEffect } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import CategoryTitleSection from "./CategoryTitleSection";
import CategoryGallery from "./CategoryGallery";
import { categoriesApi } from "../../Api";
const Category = ({ id }) => {
  const [category, setCategory] = useState({});
  useEffect(() => {
    categoriesApi
      .getOneCategory(id)
      .then(({ data: { data: { category } } }) => {
        setCategory(category);
      });
  }, [id]);
  console.log(id)
  console.log(category)
  
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <CategoryTitleSection category={category} />
        <CategoryGallery category={category} />
      </Container>
    </PageWrapper>
  );
};
export default Category;
