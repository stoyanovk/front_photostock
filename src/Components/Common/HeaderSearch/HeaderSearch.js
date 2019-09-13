import React, { useState, useEffect } from "react";
import { AutosuggestWrapper } from "./style";
import Select from "react-select";


 const HeaderSearch = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/planets/")
      .then(res => res.json())
      .then(
        ({results})=>{
          const names = results.map(({name})=>({name, value: name}))
           setArr(names)
        }
      );
  },[]);

  console.log(arr);
  
  return (
    <AutosuggestWrapper
      name="colors"
      options={arr}
      getOptionLabel={(opt) =>{
        console.log(opt);
        return opt.name
      }}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
export default HeaderSearch
