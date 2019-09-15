import React, { useState, useEffect } from "react";
import img from "../../assets/img/coffee-with-milk.jpg";
import { FirstSectionWrapper, MainTitle } from "./style";
import Typography from "@material-ui/core/Typography";
import ItemList from "../../Components/Common/ItemsList";
import { Flex } from "../../Components/Common/basicStyle";
import { tagsApi } from "../../Api";
const { getTags } = tagsApi;

export default function FirstSection() {
  const [tagsList, setTagsList] = useState([]);

  //   useEffect(() => {
  //     getTags().then(tags => {
  //       setTagsList(tags);
  //     });
  //   }, []);
  return (
    <FirstSectionWrapper>
      <img src={img} alt='bg-img' />
      <MainTitle>Somthing very beautiful</MainTitle>
      <Flex alignItems='center'>
        <Typography variant='h6' style={{ color: "#fff" }}>
          Popular tags:
        </Typography>
        <ItemList listStyle='tag-list'>
          {tagsList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ItemList>
      </Flex>
    </FirstSectionWrapper>
  );
}
