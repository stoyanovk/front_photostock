import React, { useEffect, useState } from "react";
import { Title, SectionWrapper } from "./style";
import VariableWidthSlider from "../../Components/VariableWidthSlider";
import { photosApi } from "../../Api";
import SliderItem from "./SliderItem";
import { withRouter } from "react-router-dom";
import { redirectTo } from "../../utils";
function MostPopularImagesSection({ history }) {
  const [popularImages, setPopularImage] = useState([]);
  let isMounted = false;

  useEffect(() => {
    isMounted = true;
    isMounted &&
      photosApi.getPhotos().then(({ data: { data } }) => {
        setPopularImage(data);
      });
    return () => (isMounted = false);
  }, []);

  const sliderItem = popularImages.map(({ title, imageUrl, _id }) => {
    return (
      <SliderItem
        key={_id}
        id={_id}
        title={title}
        image={`https://photostock-back.herokuapp.com/storage/${imageUrl}`}
        handleClick={redirectTo(_id, history.push, "photo")}
      />
    );
  });

  return (
    <SectionWrapper>
      <Title>Newest Images</Title>
      <VariableWidthSlider children={sliderItem} />
    </SectionWrapper>
  );
}

export default withRouter(MostPopularImagesSection);