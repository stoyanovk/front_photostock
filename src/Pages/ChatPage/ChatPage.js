import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import Comments from "../../Components/Comments";



function ChatPage() {

  
  return (
    <PageWrapper>
      <Container maxWidth='md'>
        <Comments />
      </Container>
    </PageWrapper>
  );
}

export default ChatPage;
