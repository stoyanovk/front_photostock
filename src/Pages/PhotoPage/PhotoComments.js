import React, { useState, useEffect } from "react";
import Comments from "../../Components/Comments";
import { connect } from "react-redux";
import { photosApi } from "../../Api";
function PhotoComments({ photoId, auth }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    photoId &&
      photosApi
        .getPhotoComments(photoId)
        .then(({ data: { data: { comments } } }) => setComments(comments));
  }, [photoId]);

  const commentsUpdate = comment => {
    setComments(prevComments => [comment, ...prevComments]);
  };
  return (
    <Comments
      photoId={photoId}
      comments={comments}
      auth={auth}
      commentsUpdate={commentsUpdate}
    />
  );
}
const mapStateToProps = ({ userReducer: { auth } }) => ({ auth });
export default connect(mapStateToProps)(PhotoComments);
