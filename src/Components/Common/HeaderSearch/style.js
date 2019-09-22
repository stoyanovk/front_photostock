import styled from "styled-components";
import Select from "react-select";

const AutosuggestWrapper = styled(Select)`
  max-width: 400px;
  width: 100%;
  /* min-width: 200px; */
  color: #2d2d2d;
  .select__control {
    border-radius: 20px;
  }
`;
export { AutosuggestWrapper };
