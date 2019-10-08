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
const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  height: 50px;
  display: block;
  outline: none;
  &:before {
    content: "click there, for add image";
    position: absolute;
    background-color: #949494;
    width: 100%;
    height: 100%;
    top: -2px;
    left: -2px;
    border-radius: 10px;
    border: 1px dashed #2d2d2d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
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
  GridContentWrap,
  ErrMessage,
  StyledTextField,
  StyledSelect,
  StyledLabel,
  StyledImg
};
