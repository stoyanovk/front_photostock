import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const StyledTextField = styled(TextField)`
  label {
    color: #fff !important;
  }
  input,
  textarea {
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  .MuiInputBase-root {
    &:before {
      border-bottom: 2px solid #fff !important;
    }
  }
  .MuiInput-root {
    &:after {
      border-bottom: 2px solid #fff !important;
    }
  }
`;
const StyledSelect = styled(FormControl)`
  width: 100%;
  label {
    color: #fff !important;
  }
  .MuiInputBase-root {
    &:hover {
      &:before {
        border-bottom: 2px solid rgba(255, 255, 255, 1) !important;
      }
    }
    &:before {
      border-bottom: 2px solid rgba(255, 255, 255, 1);
    }
    &:after {
      border-bottom: 2px solid rgba(255, 255, 255, 1);
    }
    svg {
      fill: #fff;
    }
  }
  .MuiSelect-root {
    color: #fff;
  }
`;

const ErrMessage = styled.span`
  color: red;
  text-align: center;
  display: block;
`;
const GridContentWrap = styled.div`
  padding: 15px;
  margin: ${({ margin }) => margin || 0};
`;
export {
  ErrMessage,
  StyledTextField,
  StyledSelect,
  GridContentWrap
};
