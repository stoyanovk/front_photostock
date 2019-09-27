import styled from "styled-components";


const MenuDropListWrapper = styled.div`
  position: relative;
  ul {
    position: absolute;
    z-index: 5;
    top: 8px;
    right: 0;
    left: 0;
    background: #fff;
    list-style: none;
    padding: 10px;
    min-width: 400px;
    max-height: 300px;
    column-count: ${({ count }) => count};
    border-radius: 6px;
  }
  li {
    font-size: 16px;
    color: #2d2d2d;
    cursor: pointer;
    a{
      text-decoration: none;
      color: #2d2d2d
    }
  }
`;
export { MenuDropListWrapper };
