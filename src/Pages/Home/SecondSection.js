import React from "react";
import { Title, SecondSectionWrapper } from './style';
import VariableWidthSlider from '../../Components/VariableWidthSlider'
export default function SecondSection() {
  return (
      <SecondSectionWrapper>
          <Title>Newest Images</Title>
          <VariableWidthSlider/>
      </SecondSectionWrapper>
  );
}
