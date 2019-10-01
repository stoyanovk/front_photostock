import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  Title,
  UserFirstWrapper,
  UserFirstImg,
  AvatarImageWrap
} from "./style";
export default function UserFirst() {
  return (
    <UserFirstWrapper>
      <UserFirstImg src='./img/1.jpg' alt='lol' />
      <Container maxWidth='xl'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={3}>
          <AvatarImageWrap>
            <img src='./img/1.jpg' alt='fdfdf' />
          </AvatarImageWrap>
          <Title>Some Name</Title>
        </Grid>
      </Container>
    </UserFirstWrapper>
  );
}
