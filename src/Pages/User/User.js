import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import UserFirst from "./UserFirst";
import { connect } from "react-redux";
function User({ user }) {
  console.log(user);
  return (
    <PageWrapper>
      <UserFirst />
    </PageWrapper>
  );
}
const mapStateToProps = ({ userReducer: { user } }) => ({ user });
export default connect(mapStateToProps)(User);
