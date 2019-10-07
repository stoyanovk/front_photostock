import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Title, Text } from "./style";
import { url } from "../../utils";
export default function PhotoDescription({ image: { title, imageUrl, description } }) {
  return (
    <div style={{ padding: 20 }}>
      <Grid container>
        <Grid item xs={12}>
          <Title>{title}</Title>
        </Grid>
        <Grid item xs={12}>
          <Text>{description}</Text>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='secondary' component='a' href={`${url}${imageUrl}`}>
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
