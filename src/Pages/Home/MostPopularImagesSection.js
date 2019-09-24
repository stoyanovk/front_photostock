import React, { useEffect, useState } from "react";
import { Title, SectionWrapper } from "./style";
import VariableWidthSlider from "../../Components/VariableWidthSlider";
// import { photosApi } from "../../Api";
import { images } from "../../Api/dataTest";
import SliderItem from "./SliderItem";
import { withRouter } from "react-router-dom";

function MostPopularImagesSection({ history }) {
  const [popularImages, setPopularImage] = useState([]);
  let isMounted = false;

  useEffect(() => {
    // photosApi.getPhotos().then(({ data: { data } }) => {
    //   setPopularImage(data);
    // });
    isMounted = true;
    setTimeout(() => {
      isMounted && setPopularImage(images);
    }, 2000);

    return () => (isMounted = false);
  }, [isMounted]);
  // const sliderItem = popularImage.map(({ date, title, imageUrl, _id }) => {
  //   return (
  //     <ImgBox key={_id} decs={title} id={_id} url={`https://photostock-back.herokuapp.com/upload${imageUrl}`}/>
  //   );
  // });
  const handleClick = (id, method) => () => {
    method(`/photo/${id}`);
  };
  const sliderItem = popularImages.map(image => {
    return (
      <SliderItem
        key={image.id}
        image={image}
        handleClick={handleClick(image.id, history.push)}
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
