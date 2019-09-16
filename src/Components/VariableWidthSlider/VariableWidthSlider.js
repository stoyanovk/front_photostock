import React, { Component } from "react";
import Slider from "react-slick";
import { photosApi } from "../../Api";
export default class VariableWidthSlider extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    photosApi.getPhotos().then(({ data: { data } }) => {
      this.setState({ images: data });
    });
  }

  render() {
    const { images } = this.state;
    console.log(images);
    const sliderItem = images.map(({ date, title, imageUrl,_id }) => {
      return (
          <div key={_id} >
          <img
            src={`https://photostock-back.herokuapp.com/upload/${imageUrl}`}
            alt={title}
          />
        </div>
      );
    });
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div>
        <Slider {...settings}>{sliderItem}</Slider>
      </div>
    );
  }
}
