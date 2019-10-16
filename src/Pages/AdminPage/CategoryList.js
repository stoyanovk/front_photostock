import React, { useEffect, useState, useCallback } from "react";
import ItemList from "../../Components/Common/ItemsList";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImgLabel from "../../Components/Common/ImgLabel";
import Grid from "@material-ui/core/Grid";
import { categoriesApi } from "../../Api";
const initialData = {
  name: "",
  label: ""
};
function CategoryList({ categories }) {
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [data, setData] = useState(initialData);
  useEffect(() => {
    setCategoriesArr(categories);
  }, [categories]);
  const handleChangeFile = file => {
    setData(prevdata => ({ ...prevdata, label: file }));
  };

  const handleClick = () => {
    const [name, label] = data;
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("label", label);
    categoriesApi.addNewCategory(formdata).then(({ data: { data } }) => {
      setCategoriesArr([...categoriesArr, data]);
      setData(initialData);
    });
  };
  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };

  console.log("render");
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <ItemList>
          {categoriesArr
            ? categoriesArr.map(({ _id, name }) => {
                return <ListItem key={_id}>{name}</ListItem>;
              })
            : null}
        </ItemList>
        <TextField
          label='category'
          margin='normal'
          name='name'
          value={data.name}
          onChange={handleChange}
        />
        <div>
          <Button variant='contained' onClick={handleClick}>
            add category
          </Button>
          <Button variant='contained' disabled>
            delete category
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ImgLabel handleChangeFile={handleChangeFile} label={data.label} />
      </Grid>
    </Grid>
  );
}
const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});
export default connect(mapStateToProps)(CategoryList);
