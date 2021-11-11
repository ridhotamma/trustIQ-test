import { Container, makeStyles } from "@material-ui/core";
import { request } from "../utils";
import React, { useState, useEffect } from "react";
import UserSingle from "./UserSingle";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(true);

  useEffect(() => {
    request.getUsers("http://localhost:5000/api/users", setUsers);
  }, [users]);

  const deleteUser = (id) => {
    axios.delete("http://localhost:5000/api/user/" + id);
  };

  const updateUser = (id) => {
    console.log(id);
    axios
      .put("http://localhost:5000/api/user/" + id, {
        name: "ririn",
        NIP: "334",
        no_tlp: "0098",
        email: "ririn@gmail.com",
      })
      .then((res) => console.log(res));
  };
  return (
    <React.Fragment>
      <Container className={classes.container}>
        {users?.results?.map((user) => (
          <UserSingle
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default UserList;
