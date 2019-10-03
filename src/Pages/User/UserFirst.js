import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { url } from "../../utils";
import {
  Title,
  UserFirstWrapper,
  UserFirstImg,
  AvatarImageWrap
} from "./style";
export default function UserFirst({ user }) {

  const { label, name } = user;
  return (
    <UserFirstWrapper>
      <UserFirstImg src={`${url}${label}`} alt={name} />
      <Container maxWidth='xl'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={3}>
          <AvatarImageWrap>
            <img src={`${url}${label}`} alt={name} />
          </AvatarImageWrap>
          <Title>{name}</Title>
        </Grid>
      </Container>
    </UserFirstWrapper>
  );
}
