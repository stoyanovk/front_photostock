import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import FirstSection from "./FirstSection";
import MostPopularImagesSection from "./MostPopularImagesSection";
import Container from "@material-ui/core/Container";
import CategorySection from "./CategorySection";

export default function Home() {
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <FirstSection />
        <MostPopularImagesSection />
        <CategorySection />
      </Container>
    </PageWrapper>
  );
}
