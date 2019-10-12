import React, { useEffect, useState } from "react";
import ItemList from "../../Components/Common/ItemsList";
import ListItem from "@material-ui/core/ListItem";
import { usersApi } from "../../Api";
function UserList() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    usersApi.getUsers().then(({ data: { data: { users } } }) => {
      setUser(users)
    });
  }, []);
  return (
    <ItemList>
      {users.map(({ _id, name }) => {
        return <ListItem key={_id}>{name}</ListItem>;
      })}
    </ItemList>
  );
}
export default UserList;
