import React, { useState } from "react";
import { StyledLabel, StyledImg } from "./style";
export default function ImgLabel({ handleChangeFile }) {
  const [fileUrl, setFileUrl] = useState("");
  const setImg = ({ target }) => {
    const file = target.files[0];
    console.log(file);
    if (file) {
      handleChangeFile(file);
      setFileUrl(URL.createObjectURL(file));
    } else {
      setFileUrl("");
    }
  };

  return (
    <>
      <StyledLabel>
        <input onChange={setImg} name='' type='file' />
      </StyledLabel>
      {fileUrl ? <StyledImg src={fileUrl} alt='label' /> : null}
    </>
  );
}
