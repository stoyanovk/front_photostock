import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import UserFirst from "./UserFirst";
import UserGallery from './UserGallery'

function User({ user }) {
  return (
    <PageWrapper>
      <UserFirst user={user} />
      <UserGallery id={user._id}/>
    </PageWrapper>
  );
}

export default User;
