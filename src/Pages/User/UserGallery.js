import React, { useEffect, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Title, SectionWrapper,GridImg } from "./style";
import { usersApi } from "../../Api";
import { url } from "../../utils";
import { Link } from "react-router-dom";
function UserGallery({ id }) {
  const [userPhotos, setuserPhotos] = useState([]);
  useEffect(() => {
    id &&
      usersApi.getOneUser(id).then(({ data: { data: { user: { images } } } }) =>
        setuserPhotos(images)
      );
  }, [id]);
  return (
    <SectionWrapper>
      <Title></Title>
      <GridList cellHeight={260} cols={6}>
        {userPhotos.map(({ _id, title, imageUrl }) => (
          <GridListTile key={_id} cols={2}>
            <Link to={`/photo/${_id}`}>
              <GridImg src={`${url}${imageUrl}`} alt={title} />
              <GridListTileBar title={title} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </SectionWrapper>
  );
}
// const mapStateToProps = ({ categoryReducer: {  } }) => ({

// });

export default UserGallery;
