import React, { useState, useEffect } from "react";
import Comments from "../../Components/Comments";
import { photosApi } from "../../Api";
function PhotoComments({ photoId }) {
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
      commentsUpdate={commentsUpdate}
    />
  );
}

export default PhotoComments;
