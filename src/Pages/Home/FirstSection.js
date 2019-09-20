import React, { useState, useEffect } from "react";
import img from "../../assets/img/coffee-with-milk.jpg";
import { FirstSectionWrapper, MainTitle } from "./style";
import Typography from "@material-ui/core/Typography";
import ItemList from "../../Components/Common/ItemsList";
import { Grid } from "@material-ui/core";
import { withConsumer } from "../../HOC";

function FirstSection({ value: { tags } }) {
  return (
    <FirstSectionWrapper>
      <img src={img} alt='bg-img' />
      <MainTitle>Somthing very beautiful</MainTitle>
      <Grid container alignItems='center'>
        <Typography variant='h6' style={{ color: "#fff" }}>
          Popular tags:
        </Typography>
        <ItemList listStyle='tag-list'>
          {tags.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ItemList>
      </Grid>
    </FirstSectionWrapper>
  );
}
FirstSection.defaultProps = {
  tags: ["animal", "summer", "girls"]
};
export default withConsumer(FirstSection);
//PAR
//LIST state = {listData, hover={}}
//<Modal  listData={this.state.listData} />


