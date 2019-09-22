import React from "react";
import Container from "@material-ui/core/Container";

export default function CategoryTitleSection({ category: { name, label } }) {
  console.log(name, label);
  return (
    <Container maxWidth='xl'>
      <div>
        <img src={`${label}`} alt={name} />
      
      </div>
    </Container>
  );
}
