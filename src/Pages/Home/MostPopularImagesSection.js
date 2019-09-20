import React, { useEffect, useState } from "react";
import { Title, SecondSectionWrapper } from "./style";
import VariableWidthSlider from "../../Components/VariableWidthSlider";
// import { photosApi } from "../../Api";
import { images } from "../../Api/dataTest";
import SliderItem from './SliderItem';


export default function MostPopularImagesSection() {
  const [popularImages, setPopularImage] = useState([]);
  useEffect(() => {
    // photosApi.getPhotos().then(({ data: { data } }) => {
    //   setPopularImage(data);
    // });
    setTimeout(()=>setPopularImage(images),2000)
  }, []);
  // const sliderItem = popularImage.map(({ date, title, imageUrl, _id }) => {
  //   return (
  //     <ImgBox key={_id} decs={title} id={_id} url={`https://photostock-back.herokuapp.com/upload${imageUrl}`}/>
  //   );
  // });

  

  const sliderItem = popularImages.map(image => {
    return (
      <SliderItem key={image.id} image={image} />
    );
  });
  return (
    <SecondSectionWrapper>
      <Title>Newest Images</Title>
      <VariableWidthSlider children={sliderItem} />
    </SecondSectionWrapper>
  );
}
