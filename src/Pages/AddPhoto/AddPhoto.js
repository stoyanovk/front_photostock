import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { photosApi } from "../../Api";
import { withRouter } from "react-router-dom";
import {
  StyledTextField,
  StyledSelect,
  StyledLabel,
  StyledImg,
  ErrMessage,
  GridContentWrap
} from "./style";
import { isEmpty } from "validator";
import { connect } from "react-redux";
const initState = {
  title: "",
  description: "",
  alt: "",
  category: "",
  image: ""
};
function AddPhoto({ categories, history }) {
  const [state, setState] = useState(initState);
  const [fileUrl, setFileUrl] = useState("");
  const [err, setErr] = useState("");
  const { title, description, alt, category, image } = state;
  const handleChange = ({ target: { name, value } }) => {
    return setState(state => ({
      ...state,
      [name]: value
    }));
  };
  const handleChangeFile = ({ target }) => {
    const file = target.files[0];
    setFileUrl(URL.createObjectURL(file));
    return setState(state => ({
      ...state,
      image: file
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (
      isEmpty(title) ||
      isEmpty(description) ||
      isEmpty(category) ||
      image === ""
    ) {
      setErr("fill in empty fields");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("alt", alt);
    formData.append("image", image);
    formData.append("category_id", category);
    photosApi.addNewPhoto(formData).then(({ data: { data: { _id } } }) =>
      history.push(`/photo/${_id}`)
    );
  };
  return (
    <PageWrapper>
      <Container maxWidth='md' style={{ height: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Grid container style={{ padding: 100 }}>
            <Grid item xs={12} md={6}>
              <GridContentWrap>
                <StyledLabel>
                  <input onChange={handleChangeFile} name='' type='file' />
                </StyledLabel>
                {fileUrl ? <StyledImg src={fileUrl} alt='label' /> : null}
              </GridContentWrap>
            </Grid>
            <Grid item xs={12} md={6}>
              <GridContentWrap>
                <StyledTextField
                  fullWidth
                  label='title'
                  name='title'
                  value={title}
                  onChange={handleChange}
                  margin='normal'
                  autoComplete='off'
                />
                <StyledTextField
                  fullWidth
                  label='description'
                  name='description'
                  value={description}
                  onChange={handleChange}
                  margin='normal'
                  multiline
                />
                <StyledTextField
                  fullWidth
                  label='alt'
                  name='alt'
                  value={alt}
                  onChange={handleChange}
                  margin='normal'
                />

                <StyledSelect>
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
                </StyledSelect>
              </GridContentWrap>
            </Grid>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'>
              <GridContentWrap margin='40px 0 0'>
                <ErrMessage>{err}</ErrMessage>
                <Button variant='contained' type='submit' color='primary'>
                  button
                </Button>
              </GridContentWrap>
            </Grid>
          </Grid>
        </form>
      </Container>
    </PageWrapper>
  );
}
const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});
export default withRouter(connect(mapStateToProps)(AddPhoto));
