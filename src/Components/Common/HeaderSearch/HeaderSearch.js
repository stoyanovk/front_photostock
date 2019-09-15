import React, { useState, useEffect } from "react";
import { AutosuggestWrapper } from "./style";
import { tagsApi } from "../../../Api";
import { format } from "url";

const HeaderSearch = () => {
  const { getTags } = tagsApi;
  const [opt, setOpt] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {}, []);
  let timeout = null;
  const handleInputChange = value => {
    if (value.lenght > 0) {
      setValue(value);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getTags(value).then(res => {
          setOpt(res);
        });
      }, 1000);
    }
  };

  return (
    <form>
      <AutosuggestWrapper
        name='tags'
        InputValue={value}
        options={opt}
        onInputChange={handleInputChange}
        getOptionLabel={option => {
          return option.name;
        }}
        className='basic-multi-select'
        classNamePrefix='select'
        onMenuClose ={()=>console.log('request')}
      /> 
    </form>
  );
};
export default HeaderSearch;
