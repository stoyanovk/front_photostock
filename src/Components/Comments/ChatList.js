import React, { useRef, useEffect } from "react";
import { StyledChatList } from "./style";

export default function ChatList({ children }) {
  const ulElem = useRef(null);

    useEffect(() => {
      console.log(children.length);
      ulElem.current.scrollIntoView({ block: "end" });
  }, [children]);

  return (
    <StyledChatList>
      <ul ref={ulElem}>{children}</ul>
    </StyledChatList>
  );
}
