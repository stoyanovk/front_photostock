import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import FirstSection from "./FirstSection";
import SecondSection from './SecondSection'
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <FirstSection />
        <SecondSection/>
      </Container>
    </PageWrapper>
  );
}
