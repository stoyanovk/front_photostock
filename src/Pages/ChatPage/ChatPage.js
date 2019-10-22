import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import CommentField from "../../Components/Comments/CommentField";
import ItemList from '../../Components/Common/ItemsList'

function ChatPage() {
  return (
    <PageWrapper>
      <Container maxWidth='md'>
        <CommentField type='chat' MessagesList={ItemList}/>
      </Container>
    </PageWrapper>
  );
}

export default ChatPage;
