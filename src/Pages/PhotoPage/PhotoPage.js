import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import AsNavForSlider from "./AsNavForSlider";

export default function PhotoPage() {
  return (
    <PageWrapper>
      <Container maxWidth='lg'>
        <AsNavForSlider />
      </Container>
    </PageWrapper>
  );
}
