import React, { useEffect, useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PhotoContainer from "./PhotoContainer";
import PhotoPageSlider from "./PhotoPageSlider";
import { photosApi } from "../../Api";

function PhotoPage({ id }) {
  const [imagesArr, setImagesArr] = useState([]);
  const [image, setImage] = useState({});
  console.log(id);
  let isMount = false;
  useEffect(() => {
    isMount = true;
    isMount &&
      photosApi.getOnePhoto(id).then(({ data: { data: { image } } }) =>
        setImage(image)
      );
    // setTimeout(() => {
    //   if (isMount) {
    //     setImagesArr(images);
    //     const image = images.find((image) => image.id === id)
    //     setImage(image);
    //   }

    // }, 800);
    return () => (isMount = false);
  }, []);
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} lg={9}>
            <PhotoContainer image={image} />
            <PhotoPageSlider images={imagesArr} />
          </Grid>
          <Grid item xs={12} lg={3}></Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}

export default PhotoPage;
