import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import FirstSection from "./FirstSection";
import Container from "@material-ui/core/Container";
export default function Home() {
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <FirstSection />
      </Container>
    </PageWrapper>
  );
}
