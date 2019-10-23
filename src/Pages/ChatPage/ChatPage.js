import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import CommentField from "../../Components/Comments/CommentField";
import ChatList from "../../Components/Comments/ChatList";

function ChatPage() {
  return (
    <PageWrapper>
      <Container maxWidth='md'>
        <CommentField type='chat' MessagesList={ChatList} />
      </Container>
    </PageWrapper>
  );
}

export default ChatPage;
