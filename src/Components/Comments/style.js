import styled from "styled-components";
const SectionWrapper = styled.div`
  padding: 50px 30px;
`;
const StyledChatList = styled.div`
  height: 60vh;
  overflow-y: scroll;
  position: relative;
  ul {
    /* position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:red */
  }
`;
export { SectionWrapper, StyledChatList };
