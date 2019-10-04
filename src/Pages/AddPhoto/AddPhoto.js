import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { photosApi } from "../../Api";
import Button from "@material-ui/core/Button";
// import { isEmail, isEmpty } from "validator";
import { connect } from "react-redux";
const initState = {
  title: "",
  description: "",
  alt: "",
  category: "",
  image: ""
};
function AddPhoto({ categories }) {
  const [state, setState] = useState(initState);
  const { title, description, alt, category, image } = state;
  const handleChange = ({ target: { name, value } }) => {
    return setState(state => ({
      ...state,
      [name]: value
    }));
  };
  const handleChangeFile = ({ target }) => {
    const file = target.files[0];
    return setState(state => ({
      ...state,
      image: file
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("alt", alt);
    formData.append("image", image);
    formData.append("category_id", category);
    photosApi.addNewPhoto(formData).then(res => console.log(res));
  };
  return (
    <PageWrapper>
      <Container maxWidth='md' style={{ height: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Grid container style={{ padding: 100 }}>
            <Grid item xs={12} md={6}>
              <label>
                lolo lfdgodobnm pojfpnte
                <input onChange={handleChangeFile} name='' type='file' />
              </label>
              <div>
                <img src='' alt='' />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='title'
                name='title'
                value={title}
                onChange={handleChange}
                margin='normal'
              />
              <TextField
                fullWidth
                label='description'
                name='description'
                value={description}
                onChange={handleChange}
                margin='normal'
                multiline
              />
              <TextField
                fullWidth
                label='alt'
                name='alt'
                value={alt}
                onChange={handleChange}
                margin='normal'
                multiline
              />
              <FormControl style={{ width: 300 }}>
                <InputLabel htmlFor='age-simple'>Category</InputLabel>
                <Select
                  onChange={handleChange}
                  value={category}
                  inputProps={{
                    name: "category",
                    id: "select-category"
                  }}>
                  {categories.map(({ name, _id }) => {
                    return (
                      <MenuItem key={_id} value={_id}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant='contained' type="submit" color='primary'>
            button
          </Button>
        </form>
      </Container>
    </PageWrapper>
  );
}
const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});
export default connect(mapStateToProps)(AddPhoto);
