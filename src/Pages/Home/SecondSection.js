import React, { useEffect, useState} from "react";
import { Title, SecondSectionWrapper } from './style';
import VariableWidthSlider from '../../Components/VariableWidthSlider';
import { photosApi } from "../../Api";

export default function SecondSection() {
  const [popularImage, setPopularImage] = useState([]);
  useEffect(() => {
    photosApi.getPhotos().then(({ data: { data } }) => {
      setPopularImage(data)
    })
  }, [])
  const sliderItem = popularImage.map(({ date, title, imageUrl, _id }) => {
    return (
      <div key={_id}>
        <img
          src={`https://photostock-back.herokuapp.com/upload/${imageUrl}`}
          alt={title}
        />
      </div>
    );
  });
  return (
      <SecondSectionWrapper>
          <Title>Newest Images</Title>
      <VariableWidthSlider />
      </SecondSectionWrapper>
  );
}

