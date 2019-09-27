import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import Grid from "@material-ui/core/Grid";
import PhotoContainer from "./PhotoContainer";
// import PhotoPageSlider from './PhotoPageSlider';
import { photosApi } from "../../Api";
import PropTypes from "prop-types";
import PhotoDescription from "./PhotoDescription";
function PhotoPage({ id }) {
  // const [imagesArr, setImagesArr] = useState([]);
  const [stateImage, setImage] = useState({});

  let isMount = false;
  useEffect(() => {
    isMount = true;
    if (isMount) {
      photosApi
        .getOnePhoto(id)
        .then(({ data: { data: { image } } }) => setImage(image))
        .catch(err => new Error(err));
    }

    return () => {
      isMount = false;
      return isMount;
    };
  }, []);
  return (
    <PageWrapper>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} lg={9}>
            <PhotoContainer image={stateImage} />
            {/* <PhotoPageSlider images={imagesArr} /> */}
          </Grid>
          <Grid item xs={12} lg={3}>
            <PhotoDescription image={stateImage} />
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}

PhotoPage.propTypes = {
  id: PropTypes.string.isRequired
};
export default PhotoPage;
